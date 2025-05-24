document.addEventListener('DOMContentLoaded', function() {
    // JavaScript to add interactivity or handle form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
        form.reset();
    });
});
