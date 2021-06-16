//function to count chars 
function charCounter(string) {
  counter = 1;
  for (let i = 0; i < string.length; i++) {
    counter++;
  }
  return counter;
}

$(document).ready(function () {
  // --- our code goes here ---
  console.log("page hass loaded & ready to be manipulated!");
  let input = document.querySelector('#tweet-text');;
  let count = document.querySelector('.counter');
  let tweetBtn = document.querySelector("#btn"); 
  input.addEventListener("keydown", () => {
    let key = count.keyCode || count.charCode ;
    let humanInput = input.value;
    //console.log(humanInput);
    let output = charCounter(humanInput);
    console.log(output);
   if(output > 140){
    count.innerHTML = 140 - output ;
     count.style.color = 'red';
     tweetBtn.attr("disabled");     //this is not working..why? 
   } else {
     count.innerHTML = 140 - output ;
   }
  });
}, false);
