const formulario = document.querySelector("#formulario")
const campo = document.querySelectorAll(".campo")
const input = document.querySelectorAll(".input")

formulario.addEventListener('submit', function (event) {

    event.preventDefault();
    verificarCampos()

    if (verificarSeEnviaParaServidor()) {
        formulario.submit()
        alert("Mensagem enviada")
    }


})

function verificarCampos() {
    let valor = 0
    input.forEach(function (elemento) {
        if (elemento.value.length < 1) {
            campo[valor].classList.add("campo-nao-preenchido");
        } else {
            campo[valor].classList.remove("campo-nao-preenchido");
            campo[valor].classList.add("campo-preenchido")
        }
        valor++
    }
    )
}

function verificarSeEnviaParaServidor() {
    for (let i = 0; i < input.length; i++) {
        if (input[i].value.length < 1) {
            return false

        }
    }
    return true
}