function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const alturaCm = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa valores válidos.";
        return;
    }

    const alturaM = alturaCm / 100;

    const imc = peso / (alturaM * alturaM);

    let categoria;
    if (imc < 18.5) {
        categoria = "bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "sobrepeso";
    } else {
        categoria = "obesidad";
    }

    document.getElementById('resultado').innerHTML = 
        `Tu IMC es ${imc.toFixed(2)}, lo que indica ${categoria}.`;
}