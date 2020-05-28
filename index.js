/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
 displayMessage(greet(timeString))

}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
let e
function greet(timearg){
   e=timearg.split(':');
  
  timearg= parseInt(e)
  
  if(timearg<12){
    return "Good Morning";
  }
  else if(timearg>=12 & timearg<=17){
    return  "Good Afternoon";
    
  }
  else {
    return "Good Evening";
  }

}

/* Write your implementation of displayMessage() */

function displayMessage(time2){
 document. getElementById('greeting').innerText=`${time2}`;
}





