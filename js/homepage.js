const hamburgBtn = document.getElementById('bars')

const xBtn = document.getElementById('x')

const menu = document.querySelector('.hamburg-menu')

hamburgBtn.addEventListener('click', () => {
    if (menu.style.display = 'none') {
        menu.style.display = 'flex'
    }
})

xBtn.addEventListener('click', () => {
    if (menu.style.display = 'flex') {
        menu.style.display = 'none'
    }
})