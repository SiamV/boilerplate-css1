
let button1 = document.getElementById('buttonSend1')

let clickButton = () => {
    let text = document.getElementsByName('gruppo1')
    text = Object.values(text).filter(el => el.checked)
    window.alert(text[0].value)
    button1.value = "sended"
}
button1.addEventListener('click',clickButton)
