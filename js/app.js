const userName = prompt('come ti chiami bomber ?')
console.log(userName)

const userSurname = prompt('come ti chiami bomber ?')
console.log(userSurname)

const userColor = prompt('come ti chiami bomber ?')
console.log(userColor)

const userAge = prompt('come ti chiami bomber ?')
console.log(userAge)

const passWord = document.getElementById('user-password')

passWord.innerHTML = userName + userSurname + userColor + userAge
 
