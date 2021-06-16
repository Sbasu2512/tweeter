/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  let dateShow = document.querySelector(".datecreated");
  dateShow.innerHTML = timeago.format(new Date());
});

tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const createTweetElement = (tweetObject) => {
  const $tweet = $(`<p class="tweetcontent">Hello world</p>`);
  return $tweet;
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.