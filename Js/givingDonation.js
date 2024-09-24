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

    const div = document.createElement('div')

    div.innerHTML = `
    <div class="flex justify-center">
    <div class=" outline rounded-lg outline-[#D3D3D3] p-[2rem] mb-[1.5rem] w-[80%] ">
    <h1 class = " font-bold "> ${donationAmounts} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
    <p class="mt-4 font-light text-[#595959]"> Date : ${new Date().toLocaleTimeString('en-US', { 
    timeZone: 'Asia/Dhaka' ,
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
     timeZoneName: 'short' 
    })}

    </p>
    </div>
    </div>
    
    `
    document.getElementById('history').appendChild(div)
    
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

    const div = document.createElement('div')

    div.innerHTML = `
    <div class="flex justify-center">
    <div class=" outline rounded-lg outline-[#D3D3D3] p-[2rem] mb-[1.5rem] w-[80%] ">
    <h1 class = " font-bold "> ${donationAmountsFeni} Taka is Donated for  Flood Relief in Feni, Bangladesh</h1>
    <p class="mt-4 font-light text-[#595959]"> Date : ${new Date().toLocaleTimeString('en-US', { 
    timeZone: 'Asia/Dhaka' ,
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
     timeZoneName: 'short' 
    })}

    </p>
    </div>
    </div>
    
    `
    document.getElementById('history').appendChild(div)
    
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

    const div = document.createElement('div')
    div.innerHTML = `
    <div class="flex justify-center">
    <div class=" outline rounded-lg outline-[#D3D3D3] p-[2rem] mb-[1.5rem] w-[80%] ">
    <h1 class = " font-bold "> ${donationAmountsMovement} Taka is Donated for Aid for Injured in the Quota Movement</h1>
    <p class="mt-4 font-light text-[#595959]"> Date : ${new Date().toLocaleTimeString('en-US', { 
    timeZone: 'Asia/Dhaka' ,
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
     timeZoneName: 'short' 
    })}

    </p>
    </div>
    </div>
    
    `
    document.getElementById('history').appendChild(div)
    
    if(afterDonationsMovement > 0){
        alert('Congrats!')
         return;

    }
})

