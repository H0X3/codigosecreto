
const cifrado = {'e': 'enter','i': 'imes','a': 'ai','o': 'ober','u': 'ufat',};

// Funcion de Encriptar
function encriptar(){
  sonido();
  let letras = document.getElementById('mensaje').value;
  letras = normalizar(letras);
  for(key in cifrado){ 
      letras = letras.replaceAll(key, cifrado[key]);
  }

document.getElementById("resultado").value = letras;

}

// Funcion de Desencriptar 
function desencriptar(){
  sonido();
  let letras = document.getElementById('mensaje').value;
  letras = normalizar(letras);
  for(key in cifrado){
      letras = letras.replaceAll(cifrado[key], key);
  }
  document.getElementById("resultado").value = letras;
}

// Funcion Copiar
function copiar(){
  sonido();
  let contenido = document.getElementById('resultado');
  contenido.select();
  document.execCommand('copy');
  // document.getElementById('mensaje').focus();
}

// Funcion Pegar
function pegar(){
  sonido();
  let contenido = document.getElementById('resultado').value;
  document.getElementById("mensaje").value = contenido;
  borrar();
  //document.getElementById('mensaje').focus();

}

// Funcion Borrar
function borrar(caja){
  sonido();
  if (caja == "arriba"){
    document.getElementById("mensaje").value = "";
  }else{
    document.getElementById("resultado").value = "";
  }

}

// Funcion Normalizar Texto
function normalizar(texto) {
  return texto.normalize('NFD').replace(/([aeiou])[\u0300-\u0308]/gi,"$1").normalize().toLowerCase();
}

function sonido(){

    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "sound/sonido_uno.mp3");
    etiquetaAudio.play();
}

function musica(set){
  if (set=="play"){

    let etiquetaAudio = document.querySelector("audio");
    etiquetaAudio.setAttribute("src", "sound/adhesive_womba.mp3");
    etiquetaAudio.play();

  }else{

    let etiquetaAudio = document.querySelector("audio");
    etiquetaAudio.pause();

  }
  
}


function play_music(){

  let mono = document.querySelector(".mono");
  let mono_ = document.querySelector(".mono_");
  let icono = document.getElementById("icono");

  if (icono.src.match("play")){
    icono.src ="./img/stop.png"
    musica("play");
    mono.style.display = "flex";
    mono_.style.display = "flex";
  }
  else{
    icono.src ="./img/play.png"
    musica("stop");
    mono.style.display = "none";
    mono_.style.display = "none";
  }
}

// document.getElementById("imagen");
// document.createElement("audio");
// document.querySelector("audio");
// document.getElementsByClassName();