/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let thisTime = time.split(":");
  let newTime = thisTime[0].concat(thisTime[1])
  let result = parseInt(newTime,10)
  
  if (result < 1200){
    return "Good Morning"
  }
  else if (result > 1700){
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string){
   let newmessage = document.getElementById("greeting");
   newmessage.innerText = string;
}