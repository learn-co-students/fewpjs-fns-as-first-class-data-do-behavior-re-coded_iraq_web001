function handleClick(e) {
  const timeStr = document.getElementById('time').value
  displayMessage(greet(timeStr))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeIn){

const timeParsed = parseInt(timeIn);
if(timeParsed<12){

  return "Good Morning"
}
if(timeParsed>=12 && timeParsed<=17){

  return "Good Afternoon"
}
if(timeParsed>17){

  return "Good Evening"
}
}
/* Write your implementation of displayMessage() */
 function displayMessage(message){

  let greetingMessage= document.getElementById('greeting');
  greetingMessage.innerText = message;
  
}