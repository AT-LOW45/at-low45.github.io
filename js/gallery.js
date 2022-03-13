import anime from "./../node_modules/animejs/lib/anime.es.js"


const images = document.querySelectorAll(".tall-photo")
let modal = document.querySelector(".modal")
let currentImage = null

document.addEventListener("click", function(event) {

    if(currentImage != null) {
        currentImage.classList.remove('active')
        document.querySelector('.modal').remove()
        currentImage = null
    } 
})



images.forEach(el => {


    el.addEventListener("click", function(event) {

        event.stopPropagation()
        // just visit page
        if(!this.classList.contains("active") && currentImage == null) {
            createModal(this)

            // another image is selected
        } else if(!this.classList.contains("active") && currentImage != null) {
            destroyModal()
            createModal(this)

            // same image is selected
        } else if(this.classList.contains("active") && currentImage != null) {
            return

        } 
    })
})


function createModal(imgEl) {
    imgEl.classList.add("active")
    const modal = document.createElement("div")
    modal.classList.add("modal")

    // small screens
    if(window.innerWidth <= 1000) {
        modal.style.transform = 'translateY(-500%)'

    } else {
        if(imgEl.getBoundingClientRect().left > 500) {
            modal.style.transform = 'translate(-110%, -500%)'

        } else if(imgEl.getBoundingClientRect().left < 500) {
            modal.style.transform = 'translate(110%, -500%)'
        }
    }

    const content = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nisi!")
    modal.appendChild(content)

    imgEl.append(modal)

    anime({
        targets: modal,
        duration: 200,
        opacity: '1',
        easing: 'easeInOutQuad'
    })

    currentImage = imgEl
}

function destroyModal() {
    currentImage.classList.remove("active")
    currentImage.removeChild(currentImage.lastChild)
}