//function to count chars 
function charCounter(string) {
  counter = 1;
  for (let i = 0; i < string.length; i++) {
    counter++;
  }
  return counter;
}

$(document).ready(function () {
  
  let input = document.querySelector('#tweet-text');;
  let count = document.querySelector('.counter');
  let tweetBtn = document.querySelector("#btn"); 
  input.addEventListener("keydown", () => {
   
    let humanInput = input.value;
    
    let output = charCounter(humanInput);
    
   if(output > 140){
    count.innerHTML = 140 - output ;
     count.style.color = 'red';
     tweetBtn.attr("disabled");     
   } else {
     count.innerHTML = 140 - output ;
     count.style.color = 'black';
     tweetBtn.removeAttribute("disabled");
   }
  });
}, false);
