function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString){
  
 const timeString1= timeString.split(' ');
const parsed = parseInt( timeString1[0]);

  if(parsed<12){
    return "Good Morning";
  }
  else if(parsed>12 &&parsed<17 ){
     return "Good Afternoon";
}
else if(parsed>17){
  return "Good Evening";
}
}

function displayMessage(str){
  document.getElementById('greeting').innerText = str;
  
}







