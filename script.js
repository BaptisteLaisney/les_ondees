import { horizontalTextAnimation } from './utils/functions.js';
function updateAnimationMain(){
    horizontalTextAnimation(220,500,'--title-banner-end-percentage','--title-banner-animation-duration-go-right')
};

window.addEventListener('resize', updateAnimationMain);
window.addEventListener('DOMContentLoaded', updateAnimationMain);