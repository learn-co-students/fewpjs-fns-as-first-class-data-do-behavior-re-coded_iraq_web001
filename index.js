/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(hours){
 const parseNum = parseInt(hours);
 
 if(parseNum < 12){
   return("Good Morning");
 }
 
else if(parseNum >= 12 && parseNum <= 17){
  return("Good Afternoon");
}

else{
  return("Good Evening");
}
 
}

/* Write your implementation of displayMessage() */

function displayMessage(x){
  document.getElementById("greeting").innerText = x;
}
  let testContent = "TEST"
  displayMessage(testContent);
