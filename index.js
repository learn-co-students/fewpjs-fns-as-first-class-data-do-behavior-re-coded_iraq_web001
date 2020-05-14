/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  let time = timeString;
  const timeDivide = time.split(":");
  if (parseInt(timeDivide[0])<12) {
    return "Good Morning";
  } else if(parseInt(timeDivide[0])<17 && timeDivide[0]>=12) {
    return "Good Afternoon";
  }
  else if (parseInt(timeDivide[0])>=17) {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(greetMsg){
  let greeting = document.getElementById('greeting');
  greeting.innerText = greetMsg;
  console.log(greetMsg);
}
