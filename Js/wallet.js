// console.log('Wallet')

// console.log('Noyakhali')

document.getElementById('noakhaliDonateButton').addEventListener('click' , function(event){
    event.preventDefault();
    const donationAmounts = getInputFieldValueById( 'donationAmount' )
    // console.log(donationAmounts) 
    const walletMoneyBefore =  getTextFieldValueById( 'walletMoney' )
    
    if( isNaN(donationAmounts)){
        alert("Invalid Amount");
        return;
    }
    if(donationAmounts < 0){
        alert("Invalid Amount");
        return;
    }
    
    if(walletMoneyBefore < donationAmounts ){
        alert("Invalid Amount");
        return;
    }
    // if(walletMoneyBefore < donationAmounts ){
    //     alert("Invalid Amount");
    //     return;
    // }

    if(walletMoneyBefore > donationAmounts){
    const afterDonations =  walletMoneyBefore - donationAmounts;
    document.getElementById('walletMoney').innerText = afterDonations;
    }
    else {
        alert("Invalid Amount");
        return 0;
    }
    


})

// console.log('Feni')
document.getElementById('feniDonateButton').addEventListener('click' , function(event){
    event.preventDefault();
    const donationAmountsFeni = getInputFieldValueById( 'donationAmountFeni' )
    const walletMoneyBefore =  getTextFieldValueById( 'walletMoney' )

    if( isNaN(donationAmounts)){
        alert("Invalid Amount");
        return;
    }
    if(donationAmounts < 0){
        alert("Invalid Amount");
        return;
    }
    
    if(walletMoneyBefore < donationAmounts ){
        alert("Invalid Amount");
        return;
    }

    if(walletMoneyBefore > donationAmountsFeni){
        const afterDonationsFeni =  walletMoneyBefore - donationAmountsFeni
        document.getElementById('walletMoney').innerText = afterDonationsFeni
        }
        else {
            alert("Invalid Amount");
            return;
        }
   


    
    
    
})


//console.log('Quota Movement')

document.getElementById('movementButton').addEventListener('click' , function(event){
    event.preventDefault();
    const donationAmountsMovement = getInputFieldValueById( 'donationMovement' )
    const walletMoneyBefore =  getTextFieldValueById( 'walletMoney' )

    if( isNaN(donationAmounts)){
        alert("Invalid Amount");
        return;
    }
    if(donationAmounts < 0){
        alert("Invalid Amount");
        return;
    }
    
    if(walletMoneyBefore < donationAmounts ){
        alert("Invalid Amount");
        return;
    }

    
    if(donationAmountsMovement > walletMoneyBefore){
        alert("Invalid Amount");
        return;
    }
    if(walletMoneyBefore > donationAmountsMovement){
        const afterDonationsMovement =  walletMoneyBefore - donationAmountsMovement
        document.getElementById('walletMoney').innerText = afterDonationsMovement;
        }
        else {
            alert("Invalid Amount");
            return;
        }

    
    
   
})

