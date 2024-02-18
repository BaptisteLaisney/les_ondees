export function horizontalTextAnimation(textWidth, vitesse, percentageVariable, durationVariable, goRigth){
    var screenWidth = window.innerWidth;
    // Calculate end percentage based on the width of the text and screen to go further
    var percentage =   -(( textWidth  / screenWidth ) * 100)
    var distance = (-percentage * screenWidth ) + screenWidth
    // total distance of the texte
    var duration =  distance / vitesse 
    // set variables
    document.documentElement.style
    .setProperty(percentageVariable, percentage + '%');
    document.documentElement.style
    .setProperty(durationVariable, duration + 's');
}