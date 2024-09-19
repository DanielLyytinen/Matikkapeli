'use strict'

let rand_num1 = 0
let rand_num2 = 0
let oikeinlaskuri = 0
let väärinlaskuri = 0

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min
}

const RandomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    RandomizeNumbers()
})

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert('Oikein!')
        document.querySelector('#oikein').innerHTML = `Oikeat vastaukset: ${++oikeinlaskuri}`
    } else {
        alert('Väärin!')
        document.querySelector('#väärin').innerHTML = `Väärät vastaukset: ${++väärinlaskuri}`
    }

    RandomizeNumbers()
    document.querySelector('input').value=''
    document.querySelector('input').focus()
})