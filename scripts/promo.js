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

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth animations to promo cards
    const promoCards = document.querySelectorAll('.promo-card');
    
    promoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Enhanced hover effects for promo cards
    promoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add pulse animation to promo badges
    const promoBadges = document.querySelectorAll('.promo-badge');
    promoBadges.forEach(badge => {
        setInterval(() => {
            badge.style.transform = 'scale(1.1)';
            setTimeout(() => {
                badge.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    });
});