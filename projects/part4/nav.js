//Hamburger
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// cart
let cartCount = 0;
const cartLink = document.querySelector('#cart-link');
const addToCartButtons = document.querySelectorAll('.product-card button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // prevent link navigation if button wrapped in <a>
    cartCount++;
    cartLink.textContent = `Cart (${cartCount})`;
  });
});

button.addEventListener('click', () => {
  cartCount++;
  cartLink.textContent = `Cart (${cartCount})`;
  window.location.href = "cart.html"; // send to cart page
});