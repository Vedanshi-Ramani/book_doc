// Appointment, payment, feedback and logout JavaScript
// Replace with ASP.NET backend later

function bookAppointment() {
    // Later submit using ASP.NET
    const patientName = document.getElementById('txtPatientName');
    const mobile = document.getElementById('txtMobile');
    const appointmentDate = document.getElementById('txtAppointmentDate');
    const timeSlot = document.getElementById('ddlTimeSlot');
    const reason = document.getElementById('txtReason');

    if (!patientName || !mobile || !appointmentDate || !timeSlot || !reason) return;

    if (!patientName.value || !mobile.value || !appointmentDate.value || !timeSlot.value || !reason.value) {
        showAlert('Please complete all appointment fields.', 'warning');
        return;
    }

    showAlert('Appointment request created. Redirecting to payment.', 'success');
    setTimeout(function () {
        window.location.href = 'payment.html';
    }, 800);
}

function makePayment() {
    // Connect payment gateway later
    const amount = document.getElementById('txtAmount');
    if (!amount) return;

    showAlert('Payment successful. Appointment booked successfully.', 'success');

    const modalHtml = `
        <div class="modal fade" id="paymentSuccessModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content rounded-4">
                    <div class="modal-body text-center p-4">
                        <i class="bi bi-check-circle-fill display-4 text-success"></i>
                        <h4 class="fw-bold mt-3">Appointment Booked Successfully</h4>
                        <p class="text-muted">Your appointment is confirmed. You can download a receipt or continue.</p>
                        <div class="d-flex justify-content-center gap-2 mt-3">
                            <button class="btn btn-outline-primary rounded-pill">Download Receipt</button>
                            <button class="btn btn-primary rounded-pill">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('paymentSuccessModal'));
    modal.show();
}

function submitFeedback() {
    // Replace with ASP.NET backend later
    const doctorName = document.getElementById('ddlDoctorName');
    const review = document.getElementById('txtReview');

    if (!doctorName || !review) return;

    if (!doctorName.value || !review.value) {
        showAlert('Please select a doctor and write a review.', 'warning');
        return;
    }

    showAlert('Feedback submitted successfully.', 'success');
}

function approveAppointment() {
    // Replace with ASP.NET backend later
    showAlert('Appointment approved.', 'success');
}

function rejectAppointment() {
    // Replace with ASP.NET backend later
    showAlert('Appointment rejected.', 'success');
}
