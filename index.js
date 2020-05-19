/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(sh)
{
  let y=parseInt(sh);
  
  if(y<12)
  return("Good Morning");
  if(y>=12 && y<=17)
  return("Good Afternoon");
  if(y>17 && y<=24)
  return("Good Evening");
}
/* Write your implementation of displayMessage() */
function displayMessage(TEST)
{
 document.querySelector("#greeting").innerText=TEST;
 
}
