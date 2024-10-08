let rotate = 0;

function resetRotation() {
rotate = 0;
const circle = document.getElementById('circle');
circle.style.transform = 'rotate(0deg)';}

function rotateCircle(step) {
rotate += step;  
const circle = document.getElementById('circle');
circle.style.transform = 'rotate(' + rotate + 'deg)';}

document.getElementById('rotate-reset').addEventListener('click', () => resetRotation());
document.getElementById('rotate-sub-45').addEventListener('click', () => rotateCircle(-45));
document.getElementById('rotate-sub-90').addEventListener('click', () => rotateCircle(-90));
document.getElementById('rotate-add-90').addEventListener('click', () => rotateCircle(90));
document.getElementById('rotate-add-45').addEventListener('click', () => rotateCircle(45));

