//Archivo principal de funcionalidad de JS

var modal = document.getElementById("modalArea");
var imagenModal = document.getElementById("imagenVentana");
var boton = document.getElementById("close");
var fotos = document.getElementsByClassName("fotito");

function detectarImagen() {
    mostrarModal(this);
    console.log(this);
}

function mostrarModal(imagen){
    console.log(modal);
    modal.style.display = "block";
    imagenModal.src = imagen.src;
}

function cerrarModal(){
    modal.style.display = "none";
}

for(var i = 0; i < fotos.length; i++){
    fotos[i].addEventListener("click",detectarImagen);
}

boton.addEventListener("click",cerrarModal);
