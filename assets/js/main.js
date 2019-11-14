function slideUp() {
  var elem = document.getElementById("notification-panel");
  var txt = document.getElementById("panel-text");
  var btn = document.getElementById("panel-btn");
  elem.style.transition = "all 0.5s ease-in-out";
  txt.style.transition = "all 0.5s ease-in-out";
  btn.style.transition = "all 0.5s ease-in-out";

  elem.style.minHeight = "0px";
  elem.style.padding = "0px";

  txt.style.display = "none";
  btn.style.display = "none";
}

function slideDown() {
  var elem = document.getElementById("newsletter");
  elem.style.transition = "all 1s ease-in-out";
  elem.style.marginBottom = "-310px";
  setTimeout(function() {
    elem.style.display = "none";
  }, 1000);

  var date = new Date();
  var deadline = new Date(date.getTime() + 10 * 60000);
  localStorage.setItem("deadline", deadline);
}
