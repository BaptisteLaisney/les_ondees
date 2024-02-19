import { horizontalTextAnimation } from './utils/functions.js';
function updateAnimationMain(){
    horizontalTextAnimation(260,500,'--title-banner-end-percentage','--title-banner-animation-duration-go-right')
    horizontalTextAnimation(1900,6000,'--title-after-end-percentage','--title-after-animation-duration-go-left')
};

window.addEventListener('resize', updateAnimationMain);
window.addEventListener('DOMContentLoaded', updateAnimationMain);