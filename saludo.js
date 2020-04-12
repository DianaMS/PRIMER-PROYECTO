function saludo() {
    let nombre = document.getElementById('nombre').value;
    let saludo = document.getElementById('saludo');
    let index = document.getElementById('seccionIndex');
    let ciencias = document.getElementById('ciencias');
    let letras = document.getElementById('letras');
    index.style.display = 'none';
    saludo.style.display = '';
    ciencias.style.display = '';
    letras.style.display = '';
    saludo.textContent = "Hola " + nombre + ", es hora de jugar la trivia.";
}