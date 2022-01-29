
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

function play(){
  var imagen = document.getElementById("imagen");
  imagen.style.backgroundImage = "url('tuUrl')";

}