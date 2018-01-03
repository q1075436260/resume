window.onload = function() {
  var toTop       = document.getElementById('to-top'),
      timer       = null;
  window.onscroll = function() {
    var toNum = document.documentElement.scrollTop || document.body.scrollTop;
    if (toNum > 100) {
      toTop.style.display = "block";
    }else {
      toTop.style.display = "none";
    }
  }
  toTop.onclick = function() {
    timer = setInterval(function() {
      var toNum = document.documentElement.scrollTop || document.body.scrollTop,
          speed = Math.ceil(toNum/5);
      document.documentElement.scrollTop = document.body.scrollTop = toNum - speed;
      if (toNum == 0) {
        clearInterval(timer);
      }
    },40)
  }
  if (document.documentElement.scrollTop > 20) {
    var meAbout   = document.getElementById("me-about"),
        meProgram = document.getElementById("me-program"),
        meAddress = document.getElementById("me-address");

  }




  // nav hover
var navText = document.getElementsByClassName("nav-text");
  for (var i = 0; i < navText.length; i++) {
    navText[i].onmouseover = function() {
      this.classList.add("active");
    }
    navText[i].onmouseout = function() {
      this.classList.remove("active");
    }
  }
}
