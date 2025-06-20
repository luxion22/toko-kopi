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

 // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        // Validate all required fields
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        if (isValid) {
            // Simulate form submission
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Mengirim...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showSuccessModal();
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }
    });
    
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';
        
    