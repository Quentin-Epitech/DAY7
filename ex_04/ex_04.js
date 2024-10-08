document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        const quantite = this.parentElement.querySelector('input[type="text"]');
        const bouton = this.querySelector('img').getAttribute('src'); 
        if (bouton.includes('plus')) {
            quantite.value = parseInt(quantite.value) + 1;}
        if (bouton.includes('minus') && parseInt(quantite.value) > 1) 
        {quantite.value = parseInt(quantite.value) - 1;}});});

document.querySelectorAll('.delete-btn').forEach(function(deleteBtn) {
    deleteBtn.addEventListener('click', function() {
        this.closest('.item').remove();});});
document.querySelectorAll('.like-btn').forEach(function(likeBtn) {
    likeBtn.addEventListener('click', function() {
        this.classList.toggle('is-active'); });});
