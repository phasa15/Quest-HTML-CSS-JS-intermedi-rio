const formulario = document.querySelector("#formulario")
const campo = document.querySelectorAll(".campo")
const input = document.querySelectorAll(".input")

formulario.addEventListener("submit", function (event) {

    event.preventDefault()
    marcarCamposPreenchidosOuNao()
    if (enviarOuNaoFormularioParaServidor()) {
        formulario.submit()
        alert("Mensagem enviada")
    }
})

function marcarCamposPreenchidosOuNao() {
    let indice = 0
    input.forEach(element => {
        if (element.value.length < 1) {
            campo[indice].classList.remove("campo-preenchido")
            campo[indice].classList.add("campo-nao-preenchido")
        } else {
            campo[indice].classList.remove("campo-nao-preenchido")
            campo[indice].classList.add("campo-preenchido")
        }
        indice++
    });
}

function enviarOuNaoFormularioParaServidor() {
    for (let i = 0; i < input.length; i++) {
        if (input[i].value.length < 1) {
            return false

        }
    }
    return true
}
