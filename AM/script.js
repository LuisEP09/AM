var botonIngresa = document.getElementById('botonIngresa');
var botonCalcular = document.getElementById('botonCalcular');
var resultadoFinal = document.getElementById('resultadoFinal');
var numeros = [];

botonIngresa.addEventListener('click', function() {
    var cantidadNum = document.getElementById('cantidadNum');
    var cantidad = parseInt(cantidadNum.value);

    numeros = [];
    for (var i = 0; i < cantidad; i++) {
        var numero = parseFloat(prompt(`Ingresa un numero ${i + 1}:`));
        numeros.push(numero);
    }

    document.getElementById('numerosCan').style.display = 'none';
    document.getElementById('operacionContainer').style.display = 'block';
});

botonCalcular.addEventListener('click', function() {
    var operacionSelect = document.getElementById('operacionSelect');
    var opcion = operacionSelect.value;

    var resultado;
    switch (opcion) {
        case 'suma':
            resultado = sumar(numeros);
            break;
        case 'resta':
            resultado = restar(numeros);
            break;
        case 'multiplicacion':
            resultado = multiplicar(numeros);
            break;
        case 'division':
            resultado = dividir(numeros);
            break;
        default:
            alert("Opción no válida.");
            return;
    }

    resultadoFinal.textContent = resultado;
    document.getElementById('resultadoContainer').style.display = 'block';
});

function sumar(numeros) {
    return numeros.reduce(function(a, b) {
        return a + b;
    });
}

function restar(numeros) {
    return numeros.reduce(function(a, b) {
        return a - b;
    });
}

function multiplicar(numeros) {
    return numeros.reduce(function(a, b) {
        return a * b;
    });
}

function dividir(numeros) {
    return numeros.reduce(function(a, b) {
        return a / b;
    });
}
