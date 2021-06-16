$(document).ready(function () {
  // --- our code goes here ---
  console.log("page hass loaded & ready to be manipulated!");
  //fn to count string
  function counter(string) {
    counter = 0;
    for (let i = 0; i < string.length; i++) {
      counter++;
    }
    return counter;
  }

  let input = document.getElementById("tweet-text");
  let count = document.getElementsByClassName("counter");

  input.addEventListener("keydown", () => {
    let humanInput = input.value;
    console.log(humanInput);
    let output = counter(humanInput);
    count.innerHTML = output;
  });
}, false);
