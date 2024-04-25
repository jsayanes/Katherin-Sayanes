function muestra_oculta(id) {
    var elemento = document.getElementById(id);
    if (elemento.style.display === 'none' || elemento.style.display === '') {
        elemento.style.display = 'flex';  // Cambia a flex para mantener el estilo original.
    } else {
        elemento.style.display = 'none';
    }
}