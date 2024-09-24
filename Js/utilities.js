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

function showSectionById(id){
    //Hide All Sections
    document.getElementById('donation').classList.add('hidden')
    document.getElementById('history').classList.add('hidden')
    //  Show Section That Is Called By The Parameter
    document.getElementById(id).classList.remove('hidden')
}

function showButtonColor( id ){
    // Hide All The Button Colors
    document.getElementById('donationButtonColor').classList.remove('bg-[#B4F461]')
    document.getElementById('historyButtonColor').classList.remove('bg-[#B4F461]')

    //  Show Button Colors
    document.getElementById(id).classList.add('bg-[#B4F461]')
}


