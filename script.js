function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")
}   

function load(){
  
  var hra1 = document.getElementById('hra')
  var data = new Date()
  var hrg = data.getHours()
  var hra11 = Number(hrg)
  var at = document.getElementById('tempo')
  var af = document.getElementById('foto')
  hra1.innerHTML =('Agora são ' + hra11 + ' horas!')


  if (hra11 >= 0 && hra11 <= 12) {
    at.innerHTML = ('Olá, muito bom dia!')
    af.src = "./css/assets/data/dia.png"

  }
  if (hra11 > 12 && hra11 < 18){
    at.innerHTML = ('Olá, muito boa tarde!')
    af.src = "./css/assets/data/tarde.png"
  }
  if (hra11 >= 18 && hra11 < 23.59){
    at.innerHTML = ('Olá, muito boa noite!')
    af.src = "./css/assets/data/noite.png"
  }

}

function time(){
  var hr1 = document.getElementById('hr')
  var hr2 = Number(hr1.value)
  var tm = document.getElementById('tempo')
  var ft = document.getElementById('foto')
  var hras1 = document.getElementById('hra')
  hras1.innerHTML = ('Agora são ' + hr2 + ' horas!')

  if (hr2 >= 0 && hr2 <= 12) {
    tm.innerHTML = ('Olá, muito bom dia!')
    ft.src = "./css/assets/data/dia.png"
  }

  if (hr2 > 12 && hr2 < 18){
    tm.innerHTML = ('Olá, muito boa tarde!')
    ft.src = "./css/assets/data/tarde.png"
  }

  if (hr2 >= 18 && hr2 < 23.59){
    tm.innerHTML = ('Olá, muito boa noite!')
    ft.src = "./css/assets/data/noite.png"  
  }
}
