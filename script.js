const form = document.getElementById('form-numeros');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const valorA = parseFloat(document.getElementById('campoA').value);
    const valorB = parseFloat(document.getElementById('campoB').value);

    if (valorB > valorA) {
        mensagem.textContent = "Formulário válido: B é maior que A.";
        mensagem.className = "mensagem valido";
    } else {
        mensagem.textContent = "Formulário inválido: B deve ser maior que A.";
        mensagem.className = "mensagem invalido";
    }

    mensagem.style.animation = "none";
    mensagem.offsetHeight;
    mensagem.style.animation = null;
});
