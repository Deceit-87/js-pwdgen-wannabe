const userName = prompt('Inserisci il tuo Nome')
console.log(userName)

const userSurname = prompt('Inserisci il tuo Cognome')
console.log(userSurname)

const userColor = prompt('Inserisci il tuo colore preferito')
console.log(userColor)

const userAge = prompt('Inserisci la tua data di nascita')
console.log(userAge)

const passWord = document.getElementById('user-password')

passWord.innerHTML = userName + userSurname + userColor + userAge
 
