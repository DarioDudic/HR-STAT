// Handle "Get Started" button click
document.querySelector('.get-started-btn').addEventListener('click', () => {
    const welcomeContainer = document.getElementById('welcome-container');
    const buttonContainer = document.querySelector('.button-container');
    const homeButton = document.querySelector('.home-btn');

    // Hide the button container immediately
    buttonContainer.classList.add('hidden');

    // Hide the welcome container
    welcomeContainer.classList.add('hidden');

    // Change the body background to white
    document.body.classList.add('blank');

    // Show the Home button
    homeButton.style.display = 'block';

    // Create the search bar
    const searchBar = document.createElement('div');
    searchBar.classList.add('search-bar');
    searchBar.innerHTML = `
        <input type="text" placeholder="Search...">
    `;
    document.body.appendChild(searchBar);

    // Create the blank screen container
    const blankScreenContainer = document.createElement('div');
    blankScreenContainer.classList.add('blank-screen-container');

    // Add content to the blank screen
    blankScreenContainer.innerHTML = `
        <div class="blank-screen-content">

        </div>
    `;

    // Append the blank screen container to the body
    document.body.appendChild(blankScreenContainer);
});

// Handle "Home" button click
document.querySelector('.home-btn').addEventListener('click', () => {
    const welcomeContainer = document.getElementById('welcome-container');
    const buttonContainer = document.querySelector('.button-container');
    const homeButton = document.querySelector('.home-btn');
    const blankScreenContainer = document.querySelector('.blank-screen-container');
    const searchBar = document.querySelector('.search-bar');

    // Show the welcome container
    welcomeContainer.classList.remove('hidden');

    // Reset the body background
    document.body.classList.remove('blank');

    // Show the button container after the transition
    setTimeout(() => {
        buttonContainer.classList.remove('hidden');
    }, 2000); // Matches the CSS transition duration

    // Hide the Home button
    homeButton.style.display = 'none';

    // Remove the blank screen container
    if (blankScreenContainer) {
        blankScreenContainer.remove();
    }

    // Remove the search bar
    if (searchBar) {
        searchBar.remove();
    }
});