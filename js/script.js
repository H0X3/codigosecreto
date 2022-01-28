
const cifrado = {'e': 'enter','i': 'imes','a': 'ai','o': 'ober','u': 'ufat',};

// Funcion de Encriptar
function encriptar(){
let letras = document.getElementById('mensaje').value;
letras = normalizar(letras);
for(key in cifrado){ 
    letras = letras.replaceAll(key, cifrado[key]);
}
document.getElementById("resultado").value = letras;
}

// Funcion de Desencriptar 
function desencriptar(){
  let letras = document.getElementById('mensaje').value;
  letras = normalizar(letras);
  for(key in cifrado){
      letras = letras.replaceAll(cifrado[key], key);
  }
  document.getElementById("resultado").value = letras;
}

// Funcion Copiar
function copiar(){
  let contenido = document.getElementById('resultado');
  contenido.select();
  document.execCommand('copy');
  document.getElementById('mensaje').focus();
}

// Funcion Pegar
function pegar(){
  let contenido = document.getElementById('resultado').value;
  document.getElementById("mensaje").value = contenido;
  borrar();
  document.getElementById('mensaje').focus();

}

// Funcion Borrar
function borrar(caja){
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