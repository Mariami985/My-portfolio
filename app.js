let navBar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');
let infoContact = document.querySelector('.contact-info');


document.querySelector('#menu-btn').onclick  = () => {
     navBar.classList.toggle('active');
}

document.querySelector('#contact').onclick = () => {
     contactInfo.classList.toggle('active');
};
document.querySelector('#close-contact-info').onclick = () => {
     contactInfo.classList.remove('active');
     infoContact.classList.remove('active');
};
document.querySelector('#info-btn').onclick = ()=> {
     infoContact.classList.toggle('active');
}

window.onscroll = () => {
     navBar.classList.remove('active');
     infoContact.classList.remove('active');
     contactInfo.classList.remove('active');

}