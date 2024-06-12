document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    alert('Form submitted successfully!');
}

function socialLogin(provider) {
    alert('Logging in with ' + provider);
    // Add your social login logic here
}

// JavaScript functionality can be added here
document.querySelector('.search-container button').addEventListener('click', function() {
    alert('Search functionality to be implemented');
});

document.querySelectorAll('.card-info button').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Add to cart functionality to be implemented');
    });
});

function selectTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.sidebar-button');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.sidebar-button[onclick="selectTab('${tabId}')"]`).classList.add('active');
}


