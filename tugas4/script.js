const menu = document.querySelector(".hamburger")
const sidemenu = document.querySelector(".sidemenu")
const close = document.querySelector(".close")



menu.addEventListener("click", () => {
    sidemenu.classList.toggle("active")
})


close.addEventListener("click", () => {
    sidemenu.classList.remove("active")
})
