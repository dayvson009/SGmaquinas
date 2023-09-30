// -------- MENU --------
const menu = document.querySelectorAll(".nav-item-title");
const menuMob = document.querySelector(".nav-header-mob");

function menuMobile(){
  menuMob.classList.toggle("active");
}

function toggleMenu(element){
  console.log(element)
  element.classList.toggle("active");
}

function closeMenu(){
  menu.forEach(menuItem => {
      menuItem.parentNode.classList.remove("active");
  })
}

menu.forEach(menuItem => {
  menuItem.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu(menuItem.parentNode);
  });
})

document.body.addEventListener('click', () => {
  closeMenu()
})

// -------- MENU FIM --------
