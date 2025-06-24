// --- Ejercicios JavaScript ---

// c) Mensaje de Bienvenida
function mostrarBienvenida() {
    alert("Bienvenidos a la programación web");
}

// d) Modificar texto en pantalla
function modificarTexto() {
    const textoElemento = document.getElementById('textoAModificar');
    if (textoElemento) {
        textoElemento.textContent = "Programación web";
        console.log("Texto modificado a: 'Programación web'");
    }
}

// e) Suma y Nombre de Usuario
function saludarYSumar() {
    const nombreUsuario = prompt("Por favor, introduce tu nombre:");
    if (nombreUsuario !== null) { // Si el usuario no cancela el prompt
        const suma = 3 + 5;
        alert(`Hola ${nombreUsuario}. La suma de 3 + 5 es: ${suma}`);
        console.log(`Hola ${nombreUsuario}. La suma de 3 + 5 es: ${suma}`);
    } else {
        console.log("Operación de 'Saludar y Sumar' cancelada por el usuario.");
    }
}

// f) Operaciones Básicas
function operacionesBasicas() {
    const num1Str = prompt("Introduce el primer número:");
    const num1 = parseFloat(num1Str);

    if (isNaN(num1)) {
        console.error("Primer valor inválido. Por favor, introduce un número.");
        return;
    }

    const num2Str = prompt("Introduce el segundo número:");
    const num2 = parseFloat(num2Str);

    if (isNaN(num2)) {
        console.error("Segundo valor inválido. Por favor, introduce un número.");
        return;
    }

    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    let division = "Indefinido (división por cero)";
    if (num2 !== 0) {
        division = num1 / num2;
    }
    const modulo = num1 % num2;

    const resultados =
        `Resultados de operaciones con ${num1} y ${num2}:\n` +
        `Suma: ${suma}\n` +
        `Resta: ${resta}\n` +
        `Multiplicación: ${multiplicacion}\n` +
        `División: ${division}\n` +
        `Módulo: ${modulo}`;

    alert(resultados); // Muestra los resultados en un alert
    console.log(resultados); // También los muestra en la consola
}

// g) Mayor de Tres Números
function encontrarMayor() {
    const n1Str = prompt("Introduce el primer número:");
    const n1 = parseFloat(n1Str);
    if (isNaN(n1)) {
        console.error("Primer valor inválido. Introduce un número.");
        return;
    }

    const n2Str = prompt("Introduce el segundo número:");
    const n2 = parseFloat(n2Str);
    if (isNaN(n2)) {
        console.error("Segundo valor inválido. Introduce un número.");
        return;
    }

    const n3Str = prompt("Introduce el tercer número:");
    const n3 = parseFloat(n3Str);
    if (isNaN(n3)) {
        console.error("Tercer valor inválido. Introduce un número.");
        return;
    }

    const mayor = Math.max(n1, n2, n3);
    console.log(`El mayor de los tres números (${n1}, ${n2}, ${n3}) es: ${mayor}`);
}

// h) Tabla de Multiplicar
function generarTabla() {
    const numeroInput = document.getElementById('numeroTabla');
    const numero = parseInt(numeroInput.value);

    if (isNaN(numero)) {
        console.error("Por favor, introduce un número válido para la tabla.");
        return;
    }

    console.log(`Tabla de Multiplicar del ${numero} (solo impares hasta 25):`);
    for (let i = 1; i <= 25; i++) {
        if (i % 2 !== 0) { // Solo números impares
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
}

// i) Serie del 1 al 10 en chips (este sigue siendo visual, ya que el objetivo es "mostrar como se realice en chips")
function generarChips() {
    const numeroInput = document.getElementById('numeroChips');
    const numero = parseInt(numeroInput.value);
    const chipsResultadoDiv = document.getElementById('chipsResultado');
    chipsResultadoDiv.innerHTML = ''; // Limpiar chips anteriores

    if (isNaN(numero) || numero < 1 || numero > 10) {
        console.error("Por favor, introduce un número entre 1 y 10 para los chips.");
        return;
    }

    for (let i = 1; i <= numero; i++) {
        const chip = document.createElement('span');
        chip.style.display = 'inline-block';
        chip.style.backgroundColor = '#add8e6';
        chip.style.padding = '5px 10px';
        chip.style.margin = '2px';
        chip.style.borderRadius = '3px';
        chip.textContent = i;
        chipsResultadoDiv.appendChild(chip);
    }
    console.log(`Generados ${numero} chips.`);
}

// j) Contraseña de acceso
function verificarContrasena() {
    const contrasenaUsuario = prompt("Introduce la contraseña de acceso:");
    const contrasenaCorrecta = "Inesco2025";

    if (contrasenaUsuario === contrasenaCorrecta) {
        console.log("¡Bienvenido! Contraseña correcta.");
    } else {
        console.warn("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}
