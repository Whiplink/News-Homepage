const hamburger = document.getElementById('hamburger')
const closeBtn = document.getElementById('close')
const bg = document.querySelector('.bg')
const menuContainer = document.querySelector('.mobile_menu_container')

let openMenu = false

const toggle = () => {
  if (!openMenu) {
    menuContainer.style.display = 'block'
    openMenu = true
  } else {
    menuContainer.style.display = 'none'
    openMenu = false
  }
}

hamburger.addEventListener('click', () => {
  toggle()
})
closeBtn.addEventListener('click', () => {
  toggle()
})
bg.addEventListener('click', () => {
  toggle()
})