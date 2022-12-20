const $hamburgerBtn = document.querySelector('.nav-btn');
const $navigation = document.querySelector('.header__nav')
const $html = document.documentElement;

$hamburgerBtn.addEventListener('click', () => {
  $navigation.classList.toggle('active');
  $hamburgerBtn.classList.toggle('active');
  $html.classList.toggle('active');
});