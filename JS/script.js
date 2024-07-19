//Start DarkMode -------------------------------------------------
const getMode = JSON.parse(localStorage.getItem("PageTheme"));
//console.log(getMode);
if (getMode === "light") {
  document.body.classList = "light";
}
function toggleMode() {
  const html = document.body;
  let mode;
  html.classList.toggle("light");
  if (html.classList.contains("light")) {
    mode = "light";
  } else {
    mode = "dark";
  }
  localStorage.setItem("PageTheme", JSON.stringify(mode));
}
function displayCourse() {
  //Armazena o número do curso selecionado.
  let course = document.getElementById("courseSelect").value;
  //Recebe como referência o local de destino da img src.
  let imgCourse = document.getElementById("displayCertification");
  //Objeto que contém todos os cursos especificados por números.
  const imagePaths = {
    '1': "./CSS/assets/image/certification/1 - Técnico Mecânica - SENAIES.jpg",
    '2': "./CSS/assets/image/certification/2 - Técnico Edificações - CEDTEC.jpg",
    '3': "./CSS/assets/image/certification/3 - Fundamentos Programação - Rocketseat.jpg",
    '4': "./CSS/assets/image/certification/4 - Banco de Dados - B7Web.jpg",
    '5': "./CSS/assets/image/certification/5 - Scrum Fundaments - ScrumStudy.jpg",
    '6': "./CSS/assets/image/certification/6 - Lean Manufacturing - RL Associados Front.jpg",
    '7': "./CSS/assets/image/certification/7 - Micro Certification - Welcome ServiceNow.jpg",
  };
  // Estrutura da criação de um elemento <img>.
  let imgElement = document.createElement("img");
  //Adiciona class ao elemento criado.
  imgElement.classList.add("img-course");
  //Adiciona img ao elemento criado.
  imgElement.src = imagePaths[course];
  // Limpa o curso anterior selecionado.
  imgCourse.innerHTML = "";
  // Adiciona a imagem ao elemento criado.
  imgCourse.appendChild(imgElement);
}
