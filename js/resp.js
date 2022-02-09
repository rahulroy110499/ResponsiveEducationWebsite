burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist= document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click', ()=>{
    
    navlist.classList.toggle('visibility-class-resp');
    rightnav.classList.toggle('visibility-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
