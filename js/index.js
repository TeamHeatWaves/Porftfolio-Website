const header = document.querySelector('.navbar-dark');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >= 700) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
};
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');

navLinks.forEach((e) => {
    e.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
});