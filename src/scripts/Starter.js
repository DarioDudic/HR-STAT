document.querySelectorAll('.nav-btn, .get-started-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Add the 'hidden' class to the button container immediately
        const buttonContainer = document.querySelector('.button-container');
        buttonContainer.classList.add('hidden');

        // Add the 'hidden' class to the welcome container
        const welcomeContainer = document.getElementById('welcome-container');
        welcomeContainer.classList.add('hidden');

        // Change the body background to white after the transition
        setTimeout(() => {
            document.body.classList.add('blank');
        }, 2000); // Matches the CSS transition duration
    });
});

// Add functionality for the Home button
const homeButton = document.createElement('button');
homeButton.classList.add('home-btn');
homeButton.textContent = 'Home';
document.body.appendChild(homeButton);

homeButton.addEventListener('click', () => {
    // Add the 'hidden' class to the button container to keep it hidden during the transition
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.classList.add('hidden');

    // Remove the 'hidden' class from the welcome container
    const welcomeContainer = document.getElementById('welcome-container');
    welcomeContainer.classList.remove('hidden');

    // Reset the body background
    document.body.classList.remove('blank');

    // Show the buttons after the transition is complete
    setTimeout(() => {
        buttonContainer.classList.remove('hidden');
    }, 2000); // Matches the CSS transition duration
});