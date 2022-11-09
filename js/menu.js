const menuToggle = document.querySelector('.hamburger_menu'),
      showcase = document.body,
      bars = document.getElementById("bars"),
      menu = document.querySelector(".menu"),
      menu_elems = document.querySelectorAll(".menu_elems li a"),
      nav = document.getElementById("header"),
      navH = document.querySelector(".nav").clientHeight,
      about = document.getElementById("about"),
      projects = document.getElementById("projects"),
      code = document.getElementById("code"),
      contacts = document.getElementById("contacts")

function diactivate_menu() {
    menu_elems.forEach((Element) => { Element.classList.remove('active') })
}

function currentSection() {
    let scroll = window.scrollY

    if (scroll > navH) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
    }

    switch(true){
        case scroll < about.offsetTop:
            diactivate_menu()
            menu_elems[0].classList.add("active")
            break;
        case scroll >= about.offsetTop && scroll < projects.offsetTop:
            diactivate_menu()
            menu_elems[1].classList.add("active")
            break;
        case scroll >= projects.offsetTop && scroll < code.offsetTop:
            diactivate_menu()
            menu_elems[2].classList.add("active")
            break;
        case scroll >= code.offsetTop && scroll < contacts.offsetTop:
            diactivate_menu()
            menu_elems[3].classList.add("active")
            break;
        case scroll >= contacts.offsetTop:
            diactivate_menu()
            menu_elems[4].classList.add("active")
            break;
        default: break;
    }
}

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

menu_elems.forEach((Element)=>{
     Element.addEventListener("click", ()=>{
        diactivate_menu()
        Element.classList.add('active')
    })
})

document.addEventListener("scroll", ()=>{
    currentSection()
})

currentSection()