console.log("Hi! Welcome to my Portfolio. Glad you stopped by!");
    

//declares the new function menuToggle// 

function menuToggle() {
}

//searches for the "myNavtoggle" within the html documents// 
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
}

//directs the browser to show the menu if it is not visible // 
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  x.className += ' responsive';
}
// if-else statement? In the if section, the browser checks if the className of x is navtoggle. If it is, it adds responsive to className (which will show the menu). In the else section, if the className of x is NOT navtoggle (because it’s currently both navtaggle responsive), it will change className back to simply navtoggle (effectively hiding your menu).// 
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}