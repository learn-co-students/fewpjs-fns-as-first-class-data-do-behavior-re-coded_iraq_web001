/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  time = time.split(':');
  time = parseInt(time,10);
  console.log(time);
  if (time <= 12){
    return 'Good Morning';
  }
  else if (time > 12 && time <=17){
    return 'Good Afternoon';
  }
  else if (time >= 17){
    return 'Good Evening';
  }
  else return 'TEST'
}
function displayMessage(msg = "TEST"){
  let message = document.querySelector('#greeting');
  message.innerHTML = msg;
}
