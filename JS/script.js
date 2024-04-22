//Start DarkMode -------------------------------------------------
const getMode = JSON.parse(localStorage.getItem("PageTheme"));
//console.log(getMode);
if (getMode === "light") {
  document.body.classList = "light";
}
function toggleMode() {
  const html = document.body;
  html.classList.toggle("light");

  let mode;
  if (html.classList.contains("light")) {
    mode = "light";
  } else {
    mode = "dark";
  }
  localStorage.setItem("PageTheme", JSON.stringify(mode));
}

function displayCourse(){
  //Armazena o número do curso selecionado.
  let course = document.getElementById("courseSelect").value;
  //Recebe como referência o local de destino da img src.
  let imgCourse = document.getElementById("displayCertification");
  //Objeto que contém todos os cursos especificados por números.
  const imagePaths = {
    '1' : "./CSS/assets/certification/1 - Técnico Mecânica - SENAIES.jpg",
    '2' : "./CSS/assets/certification/2 - Técnico Edificações - CEDTEC.jpg",
    '3' : "./CSS/assets/certification/3 - Fundamentos Programação - Rocketseat.jpg",
    '4' : "./CSS/assets/certification/4 - Banco de Dados - B7Web.jpg",
    '5' : "./CSS/assets/certification/5 - Scrum Fundaments - ScrumStudy.jpg",
    '6' : "./CSS/assets/certification/6 - Lean Manufacturing - RL Associados Front.jpg",
    '7' : "./CSS/assets/certification/7 - Micro Certification - Welcome ServiceNow.jpg",
  };
  // Cria um elemento <img>.
  let imgElement = document.createElement("img");
  //Adiciona class ao elemento criado.
  imgElement.classList.add("imgCourse");
  //Adiciona img ao elemento criado.
  imgElement.src = imagePaths[course];

  // Limpa o curso anterior selecionado.
  imgCourse.innerHTML = "";

  // Adiciona a imagem ao elemento criado.
  imgCourse.appendChild(imgElement);
}
