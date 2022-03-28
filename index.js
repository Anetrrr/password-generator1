let secOne = document.querySelector(".sec1")
let secTwo = document.querySelector(".sec2")
let secThree = document.querySelector(".sec3")
let secFour = document.querySelector(".sec4")
let btnEl =document.querySelector(".btn")

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>.,?/|\+=_-)(*&&^%$#@!~`"

function generatePass (length) {
    let password = " "
    const charactersLength = characters.length;
    for (let i=0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random()*charactersLength))
    }
    return password;
}
generatePass(13)

btnEl.addEventListener('click', () => {
secOne.textContent = generatePass(13)
secTwo.textContent = generatePass(13)
secThree.textContent = generatePass(13)
secFour.textContent = generatePass(13)

}
)