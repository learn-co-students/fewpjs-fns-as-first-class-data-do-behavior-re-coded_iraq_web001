function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))}

function greet(time) {
  let timeArray = time.split(":")
  let hour = parseInt(timeArray)

  if (hour < 12) {
    return "Good Morning";
  }
  else if (hour >= 12 && hour <= 17) {
    return "Good Afternoon";
  }
  else if (hour > 17) {
    return "Good Evening";
  }
}
function displayMessage(s) {
  const content = document.getElementById('greeting');
  content.innerText = s
}
