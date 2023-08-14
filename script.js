document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Basic hardcoded credentials (demo purposes)
    var validUsername = 'filo';
    var validPassword = 'sure';
    
    if (username === validUsername && password === validPassword) {
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});
