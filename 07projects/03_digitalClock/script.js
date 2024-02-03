document.getElementById("clock");

setInterval(() => {
  let date = new Date();

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// setInterval method takes method and time interval for how much time it should be run
// yesss 
