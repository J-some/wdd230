try {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  document.querySelector("#currentdate").textContent =
    new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("Error with code or your browser does not support Locale");
}
