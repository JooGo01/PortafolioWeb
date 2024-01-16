function cambiarEstiloOscuro() {
    var elementoClaro = document.getElementById('temaclaro');
    var elementoOscuro = document.getElementById('temaoscuro');

    elementoClaro.style.display = 'none';
    elementoOscuro.style.display = 'flex';
}

function cambiarEstiloClaro() {
    var elementoClaro = document.getElementById('temaclaro');
    var elementoOscuro = document.getElementById('temaoscuro');

    elementoOscuro.style.display = 'none';
    elementoClaro.style.display = 'flex';
}