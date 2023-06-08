function valor(valor) {
    document.getElementById("resultado").value += valor;
}

function calcular() {
    let resultado;
    try {
        resultado = eval(document.getElementById("resultado").value);
    } catch (error) {
        resultado = "Error";
    }
    document.getElementById("resultado").value = resultado;
}

function limpiar() {
    document.getElementById("resultado").value = "";
}
