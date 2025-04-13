document.addEventListener("DOMContentLoaded", () => {
    // Toggle Navbar for Mobile View
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Predefined Username & Password
    const validUsername = "admin";
    const validPassword = "123456";

    // Login Form Validation
    const loginForm = document.querySelector("#loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const username = document.querySelector("#username").value.trim();
            const password = document.querySelector("#password").value.trim();

            if (!username || !password) {
                alert("Please enter your credentials!");
                return;
            }

            if (username === validUsername && password === validPassword) {
                alert("Login successful!");

                const user = {
                    userId: "123456",
                    name: "Sv electronics",
                    email: "sv@example.com",
                    phone: "+91 9876543210",
                    address: "Hyderabad, Telangana, India",
                    orders: [
                        { id: "ORD101", item: "iPhone 14", date: "2025-03-15", status: "Delivered" },
                        { id: "ORD102", item: "AirPods Pro", date: "2025-03-20", status: "Pending" },
                    ],
                };

                localStorage.setItem("currentUser", JSON.stringify(user));
                window.location.href = "home.html";
            } else {
                alert("Invalid login credentials! Please try again.");
            }
        });
    }

    // Google Login Button Click (Placeholder)
    const googleLoginBtn = document.querySelector(".Google");
    if (googleLoginBtn) {
        googleLoginBtn.addEventListener("click", () => {
            alert("Google login feature coming soon!");
        });
    }

    // Forgot Password Alert
    const forgotPasswordLink = document.querySelector(".forgot-password");
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Password reset link has been sent to your email (Demo).");
        });
    }
});
