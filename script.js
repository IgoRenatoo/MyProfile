//-------------------------------------------------
// Start DarkMode //
const getMode = JSON.parse(localStorage.getItem("PageTheme"));
console.log(getMode);
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
//-------------------------------------------------
// Start Projeto Hora //
function timeAuto() {
  var hra1 = document.getElementById("hra");
  var data = new Date();
  var hrg = data.getHours();
  var hra11 = Number(hrg);
  var at = document.getElementById("tempo");
  var af = document.getElementById("foto");
  hra1.innerHTML = "Agora são " + hra11 + " horas!";

  if (hra11 >= 0 && hra11 <= 12) {
    at.innerHTML = "Olá, muito bom dia!";
    af.src = "./css/assets/data/dia.png";
  }
  if (hra11 > 12 && hra11 < 18) {
    at.innerHTML = "Olá, muito boa tarde!";
    af.src = "./css/assets/data/tarde.png";
  }
  if (hra11 >= 18 && hra11 < 23.59) {
    at.innerHTML = "Olá, muito boa noite!";
    af.src = "./css/assets/data/noite.png";
  }
}
function timeInformed() {
  var hr1 = document.getElementById("hr");
  var hr2 = Number(hr1.value);
  var tm = document.getElementById("tempo");
  var ft = document.getElementById("foto");
  var hras1 = document.getElementById("hra");

  if (hr2 >= 0 && hr2 <= 12) {
    tm.innerHTML = "Olá, muito bom dia!";
    ft.src = "./css/assets/data/dia.png";
    hras1.innerHTML = "Agora são " + hr2 + " horas!";
  }

  if (hr2 > 12 && hr2 < 18) {
    tm.innerHTML = "Olá, muito boa tarde!";
    ft.src = "./css/assets/data/tarde.png";
    hras1.innerHTML = "Agora são " + hr2 + " horas!";
  }

  if (hr2 >= 18 && hr2 < 23.59) {
    tm.innerHTML = "Olá, muito boa noite!";
    ft.src = "./css/assets/data/noite.png";
    hras1.innerHTML = "Agora são " + hr2 + " horas!";
  }
  if (hr2 > 24 || hr2 == null) {
    hras1.innerHTML = "Esse horário não existe!";
  }
}

//-------------------------------------------------
// Start Modal Mechanics
function mechanicModal() {
  const modal = document.getElementById("mechanicModal");
  modal.classList.add("open");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "closed" || e.target.id == "windowMechanic") {
      modal.classList.remove("open");
    }
  });
}
function edificationModal() {
  const modal = document.getElementById("edificationModal");
  modal.classList.add("open");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "closed" || e.target.id == "windowEdification") {
      modal.classList.remove("open");
    }
  });
}

