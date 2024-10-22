// Get elements
const openFormBtn = document.getElementById('openFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const popupForm = document.getElementById('popupForm');

// Open form when button is clicked
openFormBtn.addEventListener('click', function() {
    popupForm.style.display = 'block';
});

// Close form when close button is clicked
closeFormBtn.addEventListener('click', function() {
    popupForm.style.display = 'none';
});

// Submit form handler (optional)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    popupForm.style.display = 'none';  // Close the form after submission
});


