const titre = document.querySelector('h1');
let words = ["LET'S", "HAVE", "SOME", "FUN","!"];
let intervalId;
let isFrozen = false;
function shuffleWords() {
    if (!isFrozen) {
        words = words.sort(() => Math.random() - 0.5);
        titre.textContent = words.join(' ');}}
function debut() {
    intervalId = setInterval(shuffleWords, 2000);}
function stop() {
    clearInterval(intervalId);}
titre.addEventListener('mouseenter', () => {
    isFrozen = true;});
titre.addEventListener('mouseleave', () => {
    isFrozen = false;});
titre.addEventListener('click', () => {
    stop();
    navigator.clipboard.writeText(titre.textContent).then(() => {
        console.log('Text copied to clipboard');});});
document.addEventListener('click', (event) => {
    if (!titre.contains(event.target)) {
        debut();}});
document.addEventListener('keydown', (event) => {
    if (event.key === '!') {
        setTimeout(() => {
            alert('42!');
        }, 42000);}});
debut();
