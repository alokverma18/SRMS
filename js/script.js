const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Here you can add your logic to validate the user's credentials
    // and redirect them to the appropriate page

    // Example validation logic
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to dashboard page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');



