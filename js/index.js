import anime from "./anime.es.js"

const wa = document.getElementById('whatsapp')


function toggleWA() {

    if(window.scrollY > 200) {
        wa.style.display = 'block'
        
        anime({
            targets: wa,
            opacity: 1,
            duration: 100
        })

    } else {
        wa.style.display = 'none'

        anime({
            targets: wa,
            opacity: 0,
            duration: 200
        })
    }
}

window.addEventListener('scroll', toggleWA)