window.onload = function() {
  var toTop = document.getElementById("to-top"),
      timer = null;
  window.onscroll = function() {
    var toNum = document.documentElement.scrollTop || document.body.scrollTop;
    if (toNum > 100) {
      toTop.style.display = "block";
    }else {
      toTop.style.display = "none";
    }
  }
  toTop.onclick = function() {
    clearInterval(timer);
    timer = setInterval(function() {
      var toNum = document.documentElement.scrollTop || document.body.scrollTop,
          speed = Math.ceil(toNum/8);
      document.documentElement.scrollTop = document.body.scrollTop = toNum - speed;
      if (toNum == 0) {
        clearInterval(timer);
      }
    },50);
  }
}
var navText   = document.getElementsByClassName("nav-text");
    meAbout   = document.getElementById("me-about"),
    meProgram = document.getElementById("me-program"),
    meAddress = document.getElementById("me-adress");
for (var j = 0; j < navText.length; j++) {
  navText[j].onmouseover = function() {
    this.classList.add("active");
  }
  navText[j].onmouseout = function() {
    this.classList.remove("active");
  }
}
