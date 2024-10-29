//Estrutura do DarkMode
const getMode = JSON.parse(localStorage.getItem("PageTheme"));
if (getMode === "light") {
  document.body.classList = "light";
}

function toggleMode() {
  let mode = null;
  const html = document.body;
  html.classList.toggle("light");
  if (html.classList.contains("light")) {
    mode = "light";
  } else {
    mode = "dark";
  }
  localStorage.setItem("PageTheme", JSON.stringify(mode));
}

// Objeto com os caminhos das imagens dos diplomas e certificados
const imagePaths = {
  '1': "./assets/imagens/certificados/1 - Técnico Mecânica - SENAIES.jpg", 
  '2': "./assets/imagens/certificados/2 - Técnico Edificações - CEDTEC.jpg",
  '3': "./assets/imagens/certificados/3 - Formação JavaScript - B7Web.jpg",
  '4': "./assets/imagens/certificados/4 - Banco de Dados - B7Web.jpg",
  '5': "./assets/imagens/certificados/5 - Formação Lógica de Programação.jpg",
  '6': "./assets/imagens/certificados/6 - Formação Github Certification.jpg",
  '7': "./assets/imagens/certificados/7 - Formação HTML Web Developer - DIO.jpg",
  '8': "./assets/imagens/certificados/8 - Formação CSS Web Developer.jpg",
  '9': "./assets/imagens/certificados/9 - Formação JavaScript Developer.jpg",
  '10': "./assets/imagens/certificados/10 - Formação NodeJs Fundamentals.jpg",
  '11': "./assets/imagens/certificados/11 - Formação TypeScript Fullstack Developer.jpg",
  '12': "./assets/imagens/certificados/12 - Bootcamp Santander 2024 - Preparatório Certificação AWS - DIO.jpg",
  '13': "./assets/imagens/certificados/13 - Lean Manufacturing - RL Associados Front.jpg",
  '14': "./assets/imagens/certificados/14 - Fundamentos Programação - Rocketseat.jpg",
  '15': "./assets/imagens/certificados/15 - Scrum Fundaments - ScrumStudy.jpg",
  '16': "./assets/imagens/certificados/16 - Micro Certification - Welcome ServiceNow.jpg"
};

// Função para exibir a imagem do diploma ou certificado selecionado
function displayCertification() {
  const select = document.getElementById("courseSelect").value; // 
  const displayArea = document.getElementById("displayCertification");
  
  // Limpa a área de exibição antes de exibir uma nova imagem
  displayArea.innerHTML = "";
  
  if(select === "0") {
    alert("Selecione um curso desejado!")
  }else{
    const img = document.createElement("img");
    img.src = imagePaths[select];
    img.alt = "Imagem do Diploma ou Certificado";
    img.classList.add("img-certificados");
    displayArea.appendChild(img);
  }
}
