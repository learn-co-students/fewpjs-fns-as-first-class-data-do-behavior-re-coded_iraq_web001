
/* Given Code, don't edit */

function handleClick(e) {
  const timeString = parseInt(document.getElementById("time").value);
  // console.log(timeString);
  // console.log(typeof timeString);
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(time) {
  if (time < 12) {
    return "Good Morning";
  } else if (time >= 12 && time < 17) {
    return "Good Afternoon";
  } else if (time >= 5) {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.querySelector("#greeting").textContent = greeting;
}

