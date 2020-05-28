/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time){
  let parsed=parseInt(time.split(":")[0]);
  
  if(parsed < 12){
    return 'Good Morning';
  }
  else if (parsed < 17){
  return 'Good Afternoon';
}
 else {
 return 'Good Evening';
}}
function displayMessage (txt){
  document.getElementById('greeting').innerText=txt;
}

