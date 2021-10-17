let date = new Date();
let weekday = date.getDay();

if (weekday == "0") {
  document.getElementById("bann").style.display = "block";
} else {
  document.getElementById("bann").style.display = "none";
}
