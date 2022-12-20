import "%modules%/header/header";
import "%modules%/offers/offers";
import "%modules%/footer/footer";

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});