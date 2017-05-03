//Archivo principal de funcionalidad de JS

var modal = document.getElementById("modalArea");
var imagenModal = document.getElementById("modalImage");
var boton = document.getElementById("close");
var fotos = document.getElementsByClassName("fotito");

function mostrarModal(){
    console.log(modal);
    modal.style.display = "block";
    imagenModal.src = this.src;
}

function cerrarModal(){
    modal.style.display = "none";
}

for(var i = 0; i < fotos.length; i++){
    fotos[i].addEventListener("click",mostrarModal);
}

boton.addEventListener("click",cerrarModal);
