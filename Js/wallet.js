// console.log('Wallet')

// console.log('Noyakhali')

document.getElementById('noakhaliDonateButton').addEventListener('click' , function(event){
    event.preventDefault();
    const donationAmounts = getInputFieldValueById( 'donationAmount' )
    // console.log(donationAmounts) 
    const walletMoneyBefore =  getTextFieldValueById( 'walletMoney' )
    


    if(walletMoneyBefore < donationAmounts ){
        alert("Invalid Amount");
        return;
    }

    const afterDonations =  walletMoneyBefore - donationAmounts
    console.log(afterDonations)
    document.getElementById('walletMoney').innerText = afterDonations
    


})

// console.log('Feni')
document.getElementById('feniDonateButton').addEventListener('click' , function(event){
    event.preventDefault();
    const donationAmountsFeni = getInputFieldValueById( 'donationAmountFeni' )
    const walletMoneyBefore =  getTextFieldValueById( 'walletMoney' )

    
    if(donationAmountsFeni > walletMoneyBefore){
        alert("Invalid Amount");
        return;
    }

   
    const afterDonationsFeni =  walletMoneyBefore - donationAmountsFeni
    console.log(afterDonationsFeni)
    document.getElementById('walletMoney').innerText = afterDonationsFeni
    
    
})


//console.log('Quota Movement')

document.getElementById('movementButton').addEventListener('click' , function(event){
    event.preventDefault();
    const donationAmountsMovement = getInputFieldValueById( 'donationMovement' )
    const walletMoneyBefore =  getTextFieldValueById( 'walletMoney' )

    
    if(donationAmountsMovement > walletMoneyBefore){
        alert("Invalid Amount");
        return;
    }


    const afterDonationsMovement =  walletMoneyBefore - donationAmountsMovement
    console.log(afterDonationsMovement)
    document.getElementById('walletMoney').innerText = afterDonationsMovement;
    
   
})

