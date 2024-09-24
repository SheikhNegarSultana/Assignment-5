// console.log('Noyakhali')

document.getElementById('noakhaliDonateButton').addEventListener('click' , function(event){
    event.preventDefault();
    const donationAmounts = getInputFieldValueById( 'donationAmount' )
    const walletMoneyBefore =  getTextFieldValueById( 'walletMoney' )
    // console.log(donationAmounts) 

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

    const beforeDonations =  getTextFieldValueById( 'beforeDonate' )
    const afterDonations =  beforeDonations + donationAmounts
    console.log(afterDonations)
    document.getElementById('beforeDonate').innerText = afterDonations
    
    if(afterDonations > 0){
        alert('Congrats!')
         return;

    }

})

// console.log('Feni')
document.getElementById('feniDonateButton').addEventListener('click' , function(event){
    event.preventDefault();
    const donationAmountsFeni = getInputFieldValueById( 'donationAmountFeni' )
    const walletMoneyBefore =  getTextFieldValueById( 'walletMoney' )


    if( isNaN(donationAmountsFeni)){
        alert("Invalid Amount");
        return;
    }
    if(donationAmountsFeni < 0){
        alert("Invalid Amount");
        return;
    }

    if(donationAmountsFeni > walletMoneyBefore){
        alert("Invalid Amount");
        return;
    }

    const beforeDonationsFeni =  getTextFieldValueById( 'beforeDonateFeni' )
    const afterDonationsFeni =  beforeDonationsFeni + donationAmountsFeni
    console.log(afterDonationsFeni)
    document.getElementById('beforeDonateFeni').innerText = afterDonationsFeni
    
    if(afterDonationsFeni > 0){
        alert('Congrats!')
         return;

    }
})


//console.log('Quota Movement')

document.getElementById('movementButton').addEventListener('click' , function(event){
    event.preventDefault();
    const donationAmountsMovement = getInputFieldValueById( 'donationMovement' )
    const walletMoneyBefore =  getTextFieldValueById( 'walletMoney' )

    if( isNaN(donationAmountsMovement)){
        alert("Invalid Amount");
        return;
    }
    if(donationAmountsMovement < 0){
        alert("Invalid Amount");
        return;
    }

    if(donationAmountsMovement > walletMoneyBefore){
        alert("Invalid Amount");
        return;
    }


    const beforeDonationsMovement =  getTextFieldValueById( 'beforeDonationMovement' )
    const afterDonationsMovement =  beforeDonationsMovement + donationAmountsMovement
    console.log(afterDonationsMovement)
    document.getElementById('beforeDonationMovement').innerText = afterDonationsMovement;
    
    if(afterDonationsMovement > 0){
        alert('Congrats!')
         return;

    }
})

