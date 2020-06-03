/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(t){
  const time = t.split(':');
  if(parseInt(time[0],10)<12)return "Good Morning";
  else if(parseInt(time[0],10)>17)return "Good Evening";
       else return "Good Afternoon";
}
/* Write your implementation of displayMessage() */
function displayMessage(In){
  var element = document.getElementById("greeting");
  element.innerText = In;
}
