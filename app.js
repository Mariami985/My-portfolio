let navBar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick  = () => {
     navBar.classList.toggle('active');
}

window.onscroll = () => {
     navBar.classList.remove('active');
}