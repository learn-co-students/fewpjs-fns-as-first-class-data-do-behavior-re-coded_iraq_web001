function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let hours = timeString.split(':')[0];



  if (hours < 12) {
    return "Good Morning"
  }else if (hours <= 17) {
    return "Good Afternoon"
  }else  {
    return "Good Evening"
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(greeting){
document.getElementById('greeting').innerText = greeting;
}