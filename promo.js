// Promo expanding functionality
function togglePromo(promoId) {
    const promoDetails = document.getElementById(`promo-${promoId}`);
    const button = event.target;
    
    if (promoDetails.classList.contains('active')) {
        // Collapse
        promoDetails.classList.remove('active');
        button.textContent = 'Lihat Detail';
        button.style.background = 'linear-gradient(135deg, #D2691E, #F4A460)';
    } else {
        // Expand
        promoDetails.classList.add('active');
        button.textContent = 'Tutup Detail';
        button.style.background = 'linear-gradient(135deg, #8B4513, #D2691E)';
    }
}