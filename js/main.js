const menuBtn = document.querySelector(".menu-btn")
const navbar = document.querySelector(".navbar")
const navbrand = document.querySelector(".navbrand")
const navList = document.querySelector(".nav-list")
const NavItems = document.querySelectorAll(".nav-items")

let showMenu = false;


const toggleMenu = (e)=>{
    e.currentTarget

    if(!showMenu){
        menuBtn.classList.add('close')
        navbar.classList.add('show') 
        navbrand.classList.add('show')
        navList.classList.add('show')
        NavItems.forEach(items=>{items.classList.add('show')})

        showMenu = true;
    }else{
        menuBtn.classList.remove('close')
        navbar.classList.remove('show') 
        navbrand.classList.remove('show')
        navList.classList.remove('show')
        NavItems.forEach(items=>{items.classList.add('show')})

        showMenu = false;
    }

}

menuBtn.addEventListener('click', toggleMenu )