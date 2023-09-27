const mobileMenu = document.querySelector('.mobile-menu')
const scrollbtn = document.querySelector('.scroll-top')

mobileMenu.addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('show')
})

//first function
window.addEventListener('scroll',function(){
    if(document.body.scrollTop> 100 || document.documentElement.scrollTop >100 ){
        scrollbtn.style.display ="block"
    }else{
        scrollbtn.style.display ="none"
    }
}) 

// Second function
scrollbtn.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
})