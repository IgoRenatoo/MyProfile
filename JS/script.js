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

function displayCourse(){
  //Recebe o curso solicitado, retornando o número do curso desejado
  let course = document.getElementById("courseSelect").value;
  //Recebe como referência o local aonde vai mandar a img src
  let imgCourse = document.getElementById("registerCertification");
  //Objeto que contém todos os cursos númerados
  const imagePaths = {
    '1' : "./CSS/assets/certification/1 - Técnico Mecânica - SENAIES.jpg",
    '2' : "./CSS/assets/certification/2 - Técnico Edificações - CEDTEC.jpg",
    '3' : "./CSS/assets/certification/3 - Fundamentos Programação - Rocketseat.jpg",
    '4' : "./CSS/assets/certification/4 - Banco de Dados - B7Web.jpg",
    '5' : "./CSS/assets/certification/5 - Scrum Fundaments - ScrumStudy.jpg",
    '6' : "./CSS/assets/certification/6 - Lean Manufacturing - RL Associados Front.jpg",
    '7' : "./CSS/assets/certification/7 - Micro Certification - Welcome ServiceNow.jpg",
  };
    // Cria um elemento <img> e define o atributo src com o caminho da imagem
    let imgElement = document.createElement("img");
    imgElement.src = imagePaths[course];
    imgElement.classList.add("imgCourse");

    // Limpa o conteúdo anterior do elemento
    imgCourse.innerHTML = "";

    // Adiciona a imagem ao elemento
    imgCourse.appendChild(imgElement);
}
