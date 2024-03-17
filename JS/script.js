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

function printCourse(){
  let course = document.getElementById("courseSelect").value;
  let imgCourse = document.getElementById("registerCertification");
  const imagePaths = {
    '1' : "./CSS/certification/Técnico Mecânica - SENAIES.jpeg",
    '2' : "./CSS/certification/Técnico Edificações - CEDTEC.jpg",
    '3' : "./CSS/certification/Fundamentos Programação - Rocketseat.jpeg",
    '4' : "./CSS/certification/Banco de Dados - B7Web.jpeg",
    '5' : "./CSS/certification/Scrum Fundaments - ScrumStudy.jpeg",
    '6' : "./CSS/certification/TLean Manufacturing - RL Associados Front.jpeg",
    '7' : "./CSS/certification/Micro Certification - Welcome ServiceNow.jpeg",
  };
  console.log(course);
  if (imagePaths.hasOwnProperty(course)) {
    // Cria um elemento <img> e define o atributo src com o caminho da imagem
    let imgElement = document.createElement("img");
    imgElement.src = imagePaths[course];

    // Limpa o conteúdo anterior do elemento
    imgCourse.innerHTML = "";

    // Adiciona a imagem ao elemento
    imgCourse.appendChild(imgElement);
  }
}
