/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(stringTime){
  const timeSplit = stringTime.split(':');
  const parseTime = parseInt(stringTime);
  
  if(parseTime<12){
    return "Good Morning"
  }
  if(parseTime>12 && parseTime<17){
    return "Good Afternoon"
  }
  if(parseTime>17){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let greetingMessage = document.getElementById('greeting');
  greetingMessage.innerText = message;
  console.log(message);
}
