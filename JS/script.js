//Start DarkMode -------------------------------------------------
const getMode = JSON.parse(localStorage.getItem("PageTheme"));
//console.log(getMode);
if (getMode === "light") {
  document.body.classList = "light";
}
function toggleMode() {
  const html = document.body;
  html.classList.toggle("light");

  var mode;
  if (html.classList.contains("light")) {
    mode = "light";
  } else {
    mode = "dark";
  }
  localStorage.setItem("PageTheme", JSON.stringify(mode));
}
