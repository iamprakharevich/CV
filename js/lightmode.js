let lightmode = localStorage.getItem("lightmode")

function enableLightmode(){
    document.body.classList.toggle("lightmode")
    localStorage.setItem("lightmode", "enabled")
}

function disableLightmode(){
    document.body.classList.toggle("lightmode")
    localStorage.setItem("lightmode", null)
}