var clock = document.getElementById('clock');
var color = document.getElementById('color');


function hexoClock() {
  var time = new Date();
  var h = (time.getHours() % 12).toString();
  var m = time.getMinutes().toString();
  var s = time.getSeconds().toString();

//check if the number of digits is less than two then we add zero from the front
  if(h.length < 2) {
    h = '0' + h;
  }
  if(m.length < 2) {
    m = '0' + m;
  }
  if(s.length < 2) {
    s = '0' + s;
  }

//write data to variables
  var clockString = h + ':' + m + ':' + s;
  var colorString = '#' + h + m + s;

  clock.textContent = clockString;
  color.textContent = colorString;

//pass values to document
  document.body.style.background = colorString;

}

//fix for start clock
hexoClock();

//setting the function call interval
setInterval(hexoClock, 1000);
