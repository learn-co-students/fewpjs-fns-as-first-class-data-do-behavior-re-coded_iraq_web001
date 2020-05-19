/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let str = timeString.slice(0,2)
  let hour = parseInt(str);
  if ( hour < 12){
    return "Good Morning";
  }
  else if ( hour > 12 && str < 17 ){
    return "Good Afternoon";
  }
  else if ( hour > 17){
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string){
  document.querySelector('#greeting').innerText = `${string}`
}
