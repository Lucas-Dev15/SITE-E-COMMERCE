const searchContainer = document.querySelector('.search-container');
const btnSearch = document.getElementById('search-icon');

const cartContent = document.querySelector('.cart-container');
const btnCart = document.getElementById('cart-icon');

const userContaint = document.querySelector('.user-container');
const btnUser = document.getElementById('user-icon');


btnSearch.addEventListener('click', () => {
    cartContent.classList.remove('active');
    userContaint.classList.remove('active');
    searchContainer.classList.toggle('active');
})

btnCart.addEventListener('click', () => {
    searchContainer.classList.remove('active');
    userContaint.classList.remove('active');
    cartContent.classList.toggle('active')
})

btnUser.addEventListener('click', () => {
    cartContent.classList.remove('active');
    searchContainer.classList.remove('active');
    userContaint.classList.toggle('active');
})

