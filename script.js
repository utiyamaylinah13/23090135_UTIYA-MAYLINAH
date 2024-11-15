function toggleMenu() {
    const navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.classList.toggle("active");
}

// Form Validation for Contact Form
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for validation

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        // Validate inputs
        if (name === "") {
            alert("Nama harus diisi.");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Masukkan email yang valid.");
            return;
        }
        
        if (message === "") {
            alert("Pesan tidak boleh kosong.");
            return;
        }

        // Show success message
        alert("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
        
        // Reset form fields
        contactForm.reset();
    });
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
