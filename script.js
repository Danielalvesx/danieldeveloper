let menuVisible = false;
//Função que oculta ou mostra o menu
function mostrarOcultarMenu(){
  if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
  }else{
    document.getElementById("nav").classList ="responsiva";
    menuVisible = true;
  }
}

function seleccionar() {
  //ocultar o menu uma vez que selecionar a opção desejada
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// funcão que aplica as animações nas habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progresso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("sass");
    habilidades[3].classList.add("bootstrap");
    habilidades[4].classList.add("bulma");
    habilidades[5].classList.add("comunicação");
    habilidades[6].classList.add("criatividade");
    habilidades[7].classList.add("dedicação");
    habilidades[8].classList.add("proatividade");
    habilidades[9].classList.add("trabalhoEmEquipe");
  }
}


// detectar o scrol para aplicar animação na barra de habilidades 
window.onscroll = function () {
  efectoHabilidades();
}