// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
 // Set minimum date to today
 const dateInput = document.getElementById('date');
 const today = new Date().toISOString().split('T')[0];
 dateInput.min = today;

 // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearError(this);
        });
    });
    