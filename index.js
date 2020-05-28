/* Given Code, don't edit */
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/
function greet(time){
  let newTime=time.split(':');
  let HH=parseInt(newTime[0]);
  let MM=parseInt(newTime[1]);
  console.log(HH);
  console.log(HH);
  if(HH<12 && MM>=0){
    return 'Good Morning';
  }
  else if(HH>12 && HH<17 && MM>=0 ){
    return 'Good Afternoon';
  }
  else{
    return 'Good Evening';
    console.log(MM);
  }
}
function displayMessage(str){
  document.querySelector('#greeting').innerText=str;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */