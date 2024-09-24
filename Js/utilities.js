// console.log('Connected')

function getInputFieldValueById( id ){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}

function getTextFieldValueById( id ){
    const innerText = document.getElementById(id).innerText
    const innerTextNumber = parseFloat(innerText)
    return innerTextNumber;
}