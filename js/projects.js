const btn_left = document.querySelector(".fa-chevron-left"),
      btn_right = document.querySelector(".fa-chevron-right"),
      projects_list1 = document.querySelectorAll(".project_container"),
      projects_list2 = document.querySelectorAll(".card_container");
let i = 0;

function hideProjects(){
    projects_list1.forEach((Element) => { 
        Element.classList.remove('active_container')
        Element.classList.add('hidden') 
    })
}

function showProject(i){
    projects_list1[i].classList.remove('hidden')
    projects_list1[i].classList.add('active_container')
}

projects_list2.forEach((Element) => {
    Element.addEventListener('click', ()=>{
        document.querySelector('.carousel').classList.add('hidden')
        document.querySelector('.wrapper').classList.remove('hidden')
        switch(true){
            case Element.classList.value.includes("proj1"):
                showProject(0)
                break;
            case Element.classList.value.includes("proj2"):
                showProject(1)
                break;
            case Element.classList.value.includes("proj3"):
                showProject(2)
                break;
            default: break;
        }
    })
})

document.getElementById('projects').firstElementChild.addEventListener("click", ()=>{
    hideProjects()
    document.querySelector('.carousel').classList.remove('hidden')
    document.querySelector('.wrapper').classList.add('hidden')
})

btn_left.addEventListener('click', ()=>{
    hideProjects()
    i == 0 ? (i = projects_list1.length-1, showProject(i)) : (i--, showProject(i))
})
btn_right.addEventListener('click', ()=>{
    hideProjects()
    i < projects_list1.length-1 ? (i++, showProject(i)) : (i = 0, showProject(i))
})