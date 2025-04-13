// Navbar Toggle for Mobile
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Validation and Registration Handling
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    let fullName = document.querySelector('input[placeholder="Full Name"]').value.trim();
    let password = document.querySelector('input[placeholder="Password"]').value;
    let confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;
    let phoneNumber = document.querySelector('input[placeholder="Phone Number"]').value;
    
    // Full Name validation
    if (fullName.length < 3) {
        alert('Full Name must be at least 3 characters long.');
        return;
    }
    
    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Phone number validation (10-digit Indian format)
    let phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    
    // Store user data in local storage (for demo purposes)
    const userData = { fullName, phoneNumber };
    localStorage.setItem('user', JSON.stringify(userData));
    
    alert('Registration successful! Redirecting to Sign In page...');
    
    // Redirect after successful registration
    setTimeout(function() {
        window.location.href = 'index.html'; // Adjust this path if needed
    }, 2000); // Wait for 2 seconds before redirecting to allow the user to see the alert
});
