// Initialize OAuth for GitHub login
OAuth.initialize('YOUR_OAUTH_IO_PUBLIC_KEY');

// Google Sign-In callback
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    alert('Google signup successful!');
}

// GitHub Signup logic
function githubSignup() {
    OAuth.popup('github').then(github => {
        github.me().then(data => {
            console.log('Github ID: ' + data.id);
            console.log('Name: ' + data.name);
            console.log('Email: ' + data.email);
            alert('GitHub signup successful!');
        });
    }).catch(err => {
        console.error(err);
        alert('GitHub signup failed. Please try again.');
    });
}

// Signup form handling
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Simple signup logic
    if (username && password && email) {
        alert('Signup successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
