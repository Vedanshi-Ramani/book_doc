// Validation and form handling JavaScript
// Replace with ASP.NET backend later

function loginUser() {
    // Later connect with ASP.NET
    const username = document.getElementById('txtUsername');
    const password = document.getElementById('txtPassword');

    if (!username || !password) return;

    if (!username.value || !password.value) {
        showAlert('Please fill in both username and password.', 'warning');
        return;
    }

    showAlert('Login successful. This is a frontend template only.', 'success');
}

function registerUser() {
    // Connect with ASP.NET later
    const firstName = document.getElementById('txtFirstName');
    const lastName = document.getElementById('txtLastName');
    const age = document.getElementById('txtAge');
    const gender = document.getElementById('ddlGender');
    const mobile = document.getElementById('txtMobile');
    const email = document.getElementById('txtEmail');
    const password = document.getElementById('txtPassword');
    const confirmPassword = document.getElementById('txtConfirmPassword');
    const address = document.getElementById('txtAddress');
    const photo = document.getElementById('fileProfilePhoto');
    const preview = document.getElementById('imgPreview');

    if (!firstName || !lastName || !age || !gender || !mobile || !email || !password || !confirmPassword || !address || !photo) return;

    if (!firstName.value || !lastName.value || !age.value || !gender.value || !mobile.value || !email.value || !password.value || !confirmPassword.value || !address.value) {
        showAlert('Please complete all required fields.', 'warning');
        return;
    }

    if (password.value !== confirmPassword.value) {
        showAlert('Password and confirm password do not match.', 'danger');
        return;
    }

    if (mobile.value.length < 11) {
        showAlert('Mobile number must be at least 11 digits.', 'warning');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showAlert('Please enter a valid email address.', 'danger');
        return;
    }

    if (photo.files && photo.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.classList.remove('d-none');
        };
        reader.readAsDataURL(photo.files[0]);
    }

    showAlert('Registration successful. Frontend form is ready for ASP.NET integration.', 'success');
}

function contactSubmit() {
    // Replace with ASP.NET backend later
    const name = document.getElementById('txtContactName');
    const email = document.getElementById('txtContactEmail');
    const mobile = document.getElementById('txtContactMobile');
    const subject = document.getElementById('txtContactSubject');
    const message = document.getElementById('txtContactMessage');

    if (!name || !email || !mobile || !subject || !message) return;

    if (!name.value || !email.value || !mobile.value || !subject.value || !message.value) {
        showAlert('Please fill in all contact fields.', 'warning');
        return;
    }

    showAlert('Message sent successfully. ASP.NET integration can be added later.', 'success');
}
