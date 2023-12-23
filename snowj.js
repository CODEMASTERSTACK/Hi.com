// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "D " + hours + "H "
    + minutes + "M " + seconds + "S ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "WE WISH YOU A HAPPY NEW YEAR";
    document.body.style.backgroundImage = "url(https://media2.giphy.com/media/RpHHzWCTyxArcRdOS0/giphy.gif?cid=ecf05e47xe0ks0jptmunwxl83llnauulox4zcnpoyf2mj64k&ep=v1_gifs_search&rid=giphy.gif)";
  }
}, 1000);

