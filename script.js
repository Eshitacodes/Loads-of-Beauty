const toggle=document.getElementById("toggle")
const navlist=document.getElementById("navlist")

toggle.addEventListener("click", ()=> {
    navlist.classList.toggle("navlist-active")
})
