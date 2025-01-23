
//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 58 segundos (58,000 milisegundos)
setTimeout(ocultarTitulo, 58000);

//Funcion para que aparezca el boton luego de 59 segundos
setTimeout(() => {
  const link = document.querySelector('.go');
  link.classList.add('visible');
}, 59000);