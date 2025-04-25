// Function to create and display the login page
function showLoginPage() {
    // Remove existing content (if any)
    const existingPage = document.querySelector('.login-page, .register-page');
    if (existingPage) {
        existingPage.remove();
    }

    // Create the login page container
    const loginPage = document.createElement('div');
    loginPage.classList.add('login-page');

    // Add the login form HTML
    loginPage.innerHTML = `
        <div class="login-form">
            <h2>Log In</h2>
            <form>
                <div class="input-group">
                    <i class="fas fa-envelope"></i>
                    <input type="email" id="email" placeholder="Enter your email" required>
                </div>
                <div class="input-group">
                    <i class="fas fa-lock"></i>
                    <input type="password" id="password" placeholder="Enter your password" required>
                </div>
                <button type="submit" class="login-btn">Log In</button>
            </form>
            <div class="login-options">
                <a href="#" class="create-account">Create an Account</a>
                <a href="#" class="forgot-password">Forgot Password?</a>
            </div>
        </div>
    `;

    // Append the login page to the body
    document.body.appendChild(loginPage);

    // Ensure the Home button is visible
    const homeButton = document.querySelector('.home-btn');
    homeButton.style.display = 'block';

    // Add event listener for "Create an Account" link
    const createAccountLink = document.querySelector('.create-account');
    if (createAccountLink) {
        createAccountLink.addEventListener('click', (e) => {
            e.preventDefault();
            showRegisterPage(); // Show the registration page
        });
    }
}

// Function to create and display the registration page
function showRegisterPage() {
    // Remove existing content (if any)
    const existingPage = document.querySelector('.login-page, .register-page');
    if (existingPage) {
        existingPage.remove();
    }

    // Create the registration page container
    const registerPage = document.createElement('div');
    registerPage.classList.add('register-page');

    // Add the registration form HTML
    registerPage.innerHTML = `
        <div class="register-form">
            <h2>Create an Account</h2>
            <form>
                <div class="input-group">
                    <i class="fas fa-envelope"></i>
                    <input type="email" id="register-email" placeholder="Enter your email" required>
                </div>
                <div class="input-group">
                    <i class="fas fa-lock"></i>
                    <input type="password" id="register-password" placeholder="Enter your password" required>
                </div>
                <div class="input-group">
                    <i class="fas fa-lock"></i>
                    <input type="password" id="confirm-password" placeholder="Confirm your password" required>
                </div>
                <div class="newsletter">
                    <input type="checkbox" id="newsletter" />
                    <label for="newsletter">Subscribe to our newsletter</label>
                </div>
                <button type="submit" class="register-btn">Register</button>
            </form>
            <div class="register-options">
                <a href="#" class="back-to-login">Back to Log In</a>
            </div>
        </div>
    `;

    // Append the registration page to the body
    document.body.appendChild(registerPage);

    // Ensure the Home button is visible
    const homeButton = document.querySelector('.home-btn');
    homeButton.style.display = 'block';

    // Add event listener for "Back to Log In" link
    const backToLoginLink = document.querySelector('.back-to-login');
    if (backToLoginLink) {
        backToLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            showLoginPage(); // Show the login page
        });
    }
}

// Add event listener for the "Log In" button on the welcome screen
const logInButton = document.querySelector('.nav-btn.log-in');
if (logInButton) {
    logInButton.addEventListener('click', () => {
        // Hide the welcome container and button container
        document.getElementById('welcome-container').classList.add('hidden');
        document.querySelector('.button-container').classList.add('hidden');

        // Show the login page
        showLoginPage();
    });
}

// Add functionality for the Home button
const homeButton = document.querySelector('.home-btn');
if (homeButton) {
    homeButton.addEventListener('click', () => {
        // Remove the login or registration page if it exists
        const existingPage = document.querySelector('.login-page, .register-page');
        if (existingPage) {
            existingPage.remove();
        }

        // Restore the welcome container
        const welcomeContainer = document.getElementById('welcome-container');
        welcomeContainer.classList.remove('hidden');

        // Reset the body background
        document.body.classList.remove('blank');

        // Delay showing the button container until the transition is complete
        const buttonContainer = document.querySelector('.button-container');
        buttonContainer.classList.add('hidden'); // Ensure buttons are hidden during the transition
        setTimeout(() => {
            buttonContainer.classList.remove('hidden'); // Show buttons after the transition
        }, 2000); // Matches the CSS transition duration (2 seconds)

        // Hide the Home button
        homeButton.style.display = 'none';
    });
}