const formulario = document.querySelector(".formulario")
const campo = document.querySelectorAll(".campo")
const input = document.querySelectorAll(".input")

formulario.addEventListener('submit', function (event) {

    event.preventDefault();
    verificarCampos()

})


function verificarCampos() {
    for (let i = 0; i < input.length; i++) {
        if (input[i].value.length < 1) {
            campo[i].classList.add("campo-nao-preenchido");
        } else {
            campo[i].classList.remove("campo-nao-preenchido");
            campo[i].classList.add("campo-preenchido")
        }
    }
}
