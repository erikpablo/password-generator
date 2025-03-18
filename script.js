let passwordInput = document.querySelector('.password input')
let newPassword = document.querySelector('.newPassword button')

function passwordGenerator() {
    let size = Number(prompt("Qual o tamanha da senha? Entre 6 a 20 caracteres!"))

    if(isNaN(size) || size < 6 || size > 20) {
        alert("Dados incoretos! A senha deve ter entre 6 a 20 caracteres!")
        return;
    }

    let uppercaseLetters = confirm('Incluir letras maiúsculas?')
    let lowercaseLetters = confirm('Incluir letras minúsculas?')
    let number = confirm('Incluir números?')
    let specials = confirm("Incluir caracteres especiais?")

    let lettersPassword = ''
    if(uppercaseLetters) lettersPassword += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(lowercaseLetters) lettersPassword += 'abcdefghijklmnopqrstuvwxyz'
    if(number) lettersPassword += '0123456789'
    if(specials) lettersPassword += '!@#$%^&*()_+{}[]<>?/|'

    let password = ''
    for(let i = 0; i < size; i++) {
        let randomNumber = Math.floor(Math.random() * lettersPassword.length)
        
        password += lettersPassword[randomNumber]
    }

    passwordInput.value = password
} 

passwordGenerator()


newPassword.addEventListener('click', () => {
    passwordInput.value = ''
    passwordGenerator()
})

