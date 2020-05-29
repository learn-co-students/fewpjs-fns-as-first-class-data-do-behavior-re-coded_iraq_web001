
/* Given Code, don't edit */

function handleClick(e) {
  const timeString =document.getElementById("time").value;
  // console.log(timeString);
  // console.log(typeof timeString);
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(time) {
  let timeNumber = parseInt(time.split(':')[0]);
  
  if (timeNumber < 12) {
    return "Good Morning";
  } else if (timeNumber < 17) {
    return "Good Afternoon";
  } else  {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting='TEST'
) {
  
  document.querySelector("#greeting").textContent = greeting;
}

