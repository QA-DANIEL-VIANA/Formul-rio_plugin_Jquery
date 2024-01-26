$(document).ready(function () {
    // Máscara para CPF
    $('#cpf').mask('000.000.000-00', { reverse: true });

    // Máscara para telefone
    $('#telefone').mask('(00) 0000-0000');

    // Máscara para CEP
    $('#cep').mask('00000-000');
});

function moveSubmitButton() {

    let submitBtn= document.getElementById('submitBtn');
    submitBtn.classList.add('clicked');
    
}