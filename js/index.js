//loader
let mask = document.querySelector(".mask")

window.addEventListener("load", ()=>{
    setTimeout(() => {
        document.querySelector('.loader_name').classList.add('showElement')
        setTimeout(()=>{
            document.querySelector('.loader_description').classList.add('showElement')
        },300)
    }, 300);
    setTimeout(() => {
        document.querySelector('.loader_name').classList.replace('showElement', 'hideElement')
        document.querySelector('.loader_description').classList.replace('showElement', 'hideElement')
    }, 2500);
    setTimeout(()=>{
        mask.classList.add("hide")
        setTimeout(()=>{
            mask.remove()
        },600)
    },3000)
    checkActiveMenu()
})
//loader

//menu
let active_menu = document.createElement("span"),
menu_elems = document.querySelectorAll(".menu_elems li"),
sections = document.querySelectorAll("section")

active_menu.className = "menu_active"
active_menu.innerHTML = "&bull; "

function checkActiveMenu(){
    menu_elems.forEach(Element => {
        if(Element.classList.contains("active")){
            Element.insertBefore(active_menu, Element.firstChild)
        }
    });
}

function diactivate_menu() {
    menu_elems.forEach((Element) => { 
        Element.classList.remove('active')
    })
}
function diactivate_sections(){
    sections.forEach((Element)=>{
        Element.classList.remove('active')
    })
}

menu_elems.forEach((Element,index)=>{
    Element.addEventListener("click", ()=>{
       diactivate_menu()
       Element.classList.add('active')
       checkActiveMenu()
       diactivate_sections()
       sections[index].classList.add("active")
   })
})
//menu

//theme
const dark_theme_switch = document.querySelector(".dark_theme.switch span"),
light_theme_switch = document.querySelector(".light_theme.switch span")

let dark_theme="../css/dark.css", light_theme="../css/light.css"

function addStyleSheets (href) {
    var $head = document.head,
        $link = document.createElement('link');

    $link.rel = 'stylesheet';
    $link.href = href;
    
    $head.appendChild($link);
}

function disableStyleSheets (href) {
    var styles = document.styleSheets;
    for (i in styles) {
        if (styles[i].href == href) {
            styles[i].disabled = true;
        }
    }
}

dark_theme_switch.addEventListener("click", ()=>{
    addStyleSheets(dark_theme)
    disableStyleSheets(light_theme)
})

light_theme_switch.addEventListener("click", ()=>{
    addStyleSheets(light_theme)
    disableStyleSheets(dark_theme)
})
//theme