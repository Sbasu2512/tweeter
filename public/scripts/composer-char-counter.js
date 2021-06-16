function charCounter(string) {
  counter = 0;
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
  //let tweetBtn = document.getElementByClassName("btn"); 
  input.addEventListener("keydown", () => {
    let humanInput = input.value;
    console.log(humanInput);
    let output = charCounter(humanInput);
   if(output > 140){
    count.innerHTML = 140 - output ;
     count.style.color = 'red';
     $("#btn").attr("disabled");
   } else {
     count.innerHTML = 140 - output ;
   }
  });
}, false);
