import { horizontalTextAnimation } from '../utils/functions.js';
function updateAnimation(){
    horizontalTextAnimation(4500,5000,'--line-up-end-percentage-go-right','--line-up-animation-duration-go-right')
    horizontalTextAnimation(4500,6000,'--line-up-end-percentage-go-left','--line-up-animation-duration-go-left')
};
window.addEventListener('resize', updateAnimation);
window.addEventListener('DOMContentLoaded', updateAnimation);