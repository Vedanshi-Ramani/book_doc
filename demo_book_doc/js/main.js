// Main shared JavaScript for UI interactions
// Replace with ASP.NET backend later

window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }

    AOS.init({
        duration: 800,
        once: true
    });

    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', function () {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

function showAlert(message, type = 'success') {
    const alertHtml = `
        <div class="alert alert-${type} alert-dismissible fade show rounded-4 shadow-sm" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;

    const container = document.querySelector('main');
    if (container) {
        container.insertAdjacentHTML('afterbegin', alertHtml);
    }
}

function logout() {
    // Replace with ASP.NET backend later
    showAlert('You have been logged out successfully.', 'success');
}
