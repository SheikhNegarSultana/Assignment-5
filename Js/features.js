document.getElementById('donationButtonColor').addEventListener('click' , function(){
    
    showSectionById('donation')
    showButtonColor('donationButtonColor')
    
})

document.getElementById('historyButtonColor').addEventListener('click' , function(){
    showSectionById( 'history' )
    showButtonColor('historyButtonColor')
    
})

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('switchBlog').addEventListener('click', function() {
        window.location.href = "blog.html";
    });

    document.getElementById('switchHome').addEventListener('click', function() {
        window.location.href = "index.html";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const donateButton = document.getElementById('noakhaliDonateButton');
    const modalCheckbox = document.getElementById('my_modal_7');
    
    donateButton.addEventListener('click', function() {
        const isValid = true; 

        if (isValid) {
            modalCheckbox.checked = true; 
        }
    });
});

