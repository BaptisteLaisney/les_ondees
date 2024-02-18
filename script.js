function horizontalTextAnimation(textWidth, vitesse, percentageVariable, durationVariable, goRigth){
    var screenWidth = window.innerWidth;
    // Calculate end percentage based on the width of the text and screen to go further
    var percentage =   -(( textWidth  / screenWidth ) * 100)
    distance = (-percentage * screenWidth ) + screenWidth
    // total distance of the texte
    var duration =  distance / vitesse 
    // set variables
    document.documentElement.style
    .setProperty(percentageVariable, percentage + '%');
    document.documentElement.style
    .setProperty(durationVariable, duration + 's');
}



function updateAnimation(){
    horizontalTextAnimation(2650,10000,'--hearer-end-percentage','--header-animation-duration')
    horizontalTextAnimation(4500,5000,'--line-up-end-percentage-go-right','--line-up-animation-duration-go-right')
    horizontalTextAnimation(4500,6000,'--line-up-end-percentage-go-left','--line-up-animation-duration-go-left')
    horizontalTextAnimation(4110,20000,'--footer-rsn-percentage','--footer-rsn-duration')
};



function goToBilletterie(){
    window.location.href = "/billetterie";
}

window.addEventListener('resize', updateAnimation);
window.addEventListener('DOMContentLoaded', updateAnimation);

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

