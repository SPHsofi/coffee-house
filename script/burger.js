const burger = document.querySelector('.burger');
const menu = document.querySelector('.full-menu');
const nav = document.querySelectorAll('.full-nav a');

burger.addEventListener('click', function () {
  burger.classList.toggle('cross');
});

burger.addEventListener('click', function () {
  menu.classList.toggle('slide');
})
nav.forEach((navItem) => {
  navItem.addEventListener('click', function () {
    menu.classList.remove('slide');
    burger.classList.remove('cross');
  })
})
