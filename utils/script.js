import { horizontalTextAnimation } from './functions.js';



function updateAnimationDefault(){
    horizontalTextAnimation(2650,10000,'--hearer-end-percentage','--header-animation-duration')
    horizontalTextAnimation(4110,20000,'--footer-rsn-percentage','--footer-rsn-duration')
};



function goToBilletterie(){
    window.location.href = "/billetterie";
}

window.addEventListener('resize', updateAnimationDefault);
window.addEventListener('DOMContentLoaded', updateAnimationDefault);

/* INIT DEFAULT COMPONENTS */
fetch('/components/header.html')
.then(response => response.text())
.then(html => {
    document.getElementById('header').innerHTML = html;
});

fetch('/components/footer.html')
.then(response => response.text())
.then(html => {
    document.getElementById('footer').innerHTML = html;
});

