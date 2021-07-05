const clock = document.getElementById('clock');
const color = document.getElementById('color');


function hexoClock() {
  const time = new Date();
  let h = (time.getHours() % 12).toString();
  let m = time.getMinutes().toString();
  let s = time.getSeconds().toString();

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
  const clockString = h + ':' + m + ':' + s;
  const colorString = '#' + h + m + s;

  clock.textContent = clockString;
  color.textContent = colorString;

//pass values to document
  document.body.style.background = colorString;

}

//fix for start clock
hexoClock();

//setting the function call interval
setInterval(hexoClock, 1000);
