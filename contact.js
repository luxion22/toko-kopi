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

                // Clear previous errors
        clearError(field);
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            errorMessage = 'Field ini wajib diisi';
            isValid = false;
        }
        
        // Specific field validations
        switch (fieldName) {
            case 'name':
                if (value && value.length < 2) {
                    errorMessage = 'Nama minimal 2 karakter';
                    isValid = false;
                }
                break;
                
            case 'phone':
                const phonePattern = /^[\+]?[0-9\-\s\(\)]{10,}$/;
                if (value && !phonePattern.test(value)) {
                    errorMessage = 'Format nomor telepon tidak valid';
                    isValid = false;
                }
                break;
                
            case 'email':
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && !emailPattern.test(value)) {
                    errorMessage = 'Format email tidak valid';
                    isValid = false;
                }
                break;
                
            case 'date':
                if (value) {
                    const selectedDate = new Date(value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    
                    if (selectedDate < today) {
                        errorMessage = 'Tanggal tidak boleh di masa lalu';
                        isValid = false;
                    }
                }
                break;
        }
        
        if (!isValid) {
            showError(field, errorMessage);
        }
        
        return isValid;
    }
        
    