let nbr = 0;
function changeEyeColor() {
  const gauche = document.querySelector('.eye-left-iris');
  const droite = document.querySelector('.eye-right-iris');
  const couleur = '#' + Math.floor(Math.random() * 16777215).toString(16);
  gauche.style.fill = couleur;
  droite.style.fill = couleur;
}
document.getElementById('robot').addEventListener('mousemove', (e) => {
    const ecran = document.getElementById('screen-text');
    ecran.textContent = "X: " + e.clientX + ", Y: " + e.clientY;})

document.getElementById('robot').addEventListener('click', () => {
  const bulle = document.getElementById('speech-bubble');
  bulle.textContent = "Ouch, that hurts!";
  bulle.style.display = 'block';

  setTimeout(() => {
    bulle.style.display = 'none';}, 2000);});



document.getElementById('robot-input').addEventListener('input', () => {
  const ecran = document.getElementById('screen-text');
  ecran.textContent = "Don't worry, I'll take care of it!";
  
  setTimeout(() => {
    ecran.textContent = "Bip bip bip !";}, 2000);});

document.querySelectorAll('.eye-left-pupil, .eye-right-pupil').forEach(eye => {
  eye.addEventListener('click', () => {nbr++;if (nbr >= 10) {changeEyeColor();nbr = 0;}
  });});

  