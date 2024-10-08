function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.item').forEach(item => {
        const quantity = parseInt(item.querySelector('input[type="text"]').value);
        const price = parseFloat(item.querySelector('.total-price').dataset.price);
        total += quantity * price;});

    document.querySelector('.grand-total').innerText = 'Total: $' + total.toFixed(2);}

document.querySelectorAll('.plus-btn, .minus-btn, .delete-btn, .like-btn').forEach(btn => {
    btn.addEventListener('click', a => {
        const quantite = a.target.closest('.item').querySelector('input[type="text"]');
        
        if (btn.classList.contains('plus-btn')) {
            quantite.value = parseInt(quantite.value) + 1;} 
        else if (btn.classList.contains('minus-btn')) 
        {if (parseInt(quantite.value) > 1) 
            {quantite.value = parseInt(quantite.value) - 1;}} 
        else if (btn.classList.contains('delete-btn')) {
            a.target.closest('.item').remove();}
        if (btn.classList.contains('like-btn')) btn.classList.toggle('is-active');
        updateTotalPrice();});});
updateTotalPrice();
