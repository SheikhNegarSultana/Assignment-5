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
        window.location.href = "/index.html";
    });
});


