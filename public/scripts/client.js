/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
let tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

/*
 * Define another function renderTweets in the same file. This function can be responsible for taking in an array of tweet objects and then appending each one to the #tweets-container. In order to do this, the renderTweets will need to leverage the createTweetElement function you wrote earlier by passing the tweet object to it, then using the returned jQuery object by appending it to the #tweets-container section.
 */

$(document).ready(function () {
  // let dateShow = document.querySelector(".datecreated");
  // dateShow.innerHTML = timeago.format(new Date());
  // const $tweet = createTweetElement(tweetData);
  //$('.tweetcontent').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  // Test / driver code (temporary)
  //console.log($tweet); // to see what it looks like

  const renderTweets = function (arr) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let element of arr) {
      //console.log(element['content']);
      const tweet = createTweetElement(element);
      // document.querySelector('.tweet-container').innerHTML = tweet;
      $(".tweets").append(tweet);
    }
  };

  const createTweetElement = (tweetObject) => {
    // console.log("tweet obj is: ", tweetObject["content"].text);
    const tweetTemplate = `<div class='tweet-container'>
  <div class='useravatar'>
    <p><img class='reincarnation' src ='${tweetObject["user"].avatars}'/></p>
    <p class='username'>${tweetObject["user"].name}</p>
  </div>
   <p class='tweetcontent'>${tweetObject["content"].text}</p>  
  <hr>
  <div class='date-flags-container'>
    <p class='datecreated'>${timeago.format(tweetObject["created_at"])}</p>
    <div class='flags-container'>
      <p class="like"><i class="fas fa-heart"></i></p>
      <p class='retweet'><i class="fas fa-retweet"></i></p>
      <p class="flag"><i class="fas fa-flag"></i></p>
    </div>
  </div>
</div>`;

    return tweetTemplate;
  };

  renderTweets(tweetData);
});

const loadTweets = function() {
  $.ajax({
    method: 'GET',
    url: '/tweets'
  })
    .done((result) => {
      console.log(result)
      renderTweets(result)
    })
    .fail(err => console.log(err));
};

loadTweets();

$('.tweet-form').submit(function(event) {
  event.preventDefault();
  // first validate for empty/long tweets
  const $tweetBox = $(this).find('#tweet-text');
  const $counter = $(this).find('.counter');
  // const emptyMsg = $(this).siblings('.empty-tweet-err');
   const longMsg = $(this).siblings('.long-tweet-err');
  if ($tweetBox.val() === "") {
    $(longMsg).slideUp(10);
    $(emptyMsg).slideDown(200);
  } else if ($tweetBox.val().length > 140) {
    $(emptyMsg).slideUp(10);
    $(longMsg).slideDown(200);
  } else {
    const tweetSerialized = $tweetBox.serialize();
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: tweetSerialized
    })
      .done(result => {
        loadTweets();
        $tweetBox.val('');
        $counter.val(140);
        $(emptyMsg).slideUp(100);
        $(longMsg).slideUp(100);
      })
      .fail(err => console.log(err));
  }
});
