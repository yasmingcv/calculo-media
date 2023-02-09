'use strict'

const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const calcular = document.getElementById('calcular')
const situacao = document.getElementById('situacao')
const formulario = document.getElementById('formulario')

function calcularMedia() {
    const nota = (Number(nota1.value) + Number(nota2.value)) / 2

    if (nota1.value > 10 || nota2.value > 10 || nota1.value < 0 || nota2.value < 0 || nota1.value == '' || nota2.value == '') {
        formulario.classList.remove('sombra-vermelha')
        formulario.classList.remove('sombra-azul')
        formulario.classList.add('sombra-amarela')
        situacao.value = 'Digite uma nota válida (1-10)'
    } else {
        if (nota <= 4) {
            situacao.value = 'Nota: ' + nota + ', aluno reprovado'
            formulario.classList.remove('sombra-amarela')
            formulario.classList.remove('sombra-azul')
            formulario.classList.add('sombra-vermelha')
        } else {
            situacao.value = 'Nota: ' + nota + ', aluno aprovado'
            formulario.classList.remove('sombra-amarela')
            formulario.classList.remove('sombra-vermelha')
            formulario.classList.add('sombra-azul')
        }
    }
}

calcular.addEventListener('click', calcularMedia)

