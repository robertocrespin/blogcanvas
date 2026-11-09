// Archivo: script.js
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('btnInteractivo');
    const mensaje = document.getElementById('mensajeJS');

    if (boton && mensaje) {
        boton.addEventListener('click', function() {
            if (mensaje.classList.contains('oculto')) {
                mensaje.classList.remove('oculto');
                mensaje.classList.add('visible');
                boton.textContent = 'Ocultar mensaje';
            } else {
                mensaje.classList.remove('visible');
                mensaje.classList.add('oculto');
                boton.textContent = 'Ejecutar interacción JS';
            }
        });
    }
});