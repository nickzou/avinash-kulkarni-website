import mQ from './functions/mediaQueries';

const hamburgerButton = document.getElementById('hamburger-button');
const mainMenu = document.getElementById('main-menu');

hamburgerButton.addEventListener('click', function () {
    if(!mQ.lg.matches) {
        console.log(this);
        this.classList.toggle('is-active');
        mainMenu.classList.toggle('is-active');
    }
});