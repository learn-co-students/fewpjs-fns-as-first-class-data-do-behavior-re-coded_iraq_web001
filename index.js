/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeInString){

const parsed = parseInt(timeInString);
if(parsed<12){

  return "Good Morning"
}
if(parsed>12&&parsed<17){

  return "Good Afternoon"
}
if(parsed>17){

  return "Good Evening"
}
}
/* Write your implementation of displayMessage() */
 function displayMessage(message){

  let greetingMessage= document.getElementById('greeting');
  greetingMessage.innerText = message;
  console.log(message);
}
