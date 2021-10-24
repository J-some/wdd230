const temp = parseFloat(document.getElementById("temperature").innerHTML);
const speed = parseFloat(document.getElementById("wind-speed").innerHTML);

function calculateWindChill() {
  if (temp <= 50 || speed >= 3) {
    const windChill =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById("wind-chill").innerHTML = windChill.toFixed(2);
  } else {
    document.getElementById("wind-chill").innerHTML = "N/A";
  }
}

calculateWindChill();
