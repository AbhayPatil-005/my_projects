// DELETE FROM LOCAL STORAGE

// Handle form submission and save user data to localStorage
function handleFormSubmit(event){
    event.preventDefault(); // Prevent default form reload behavior

    // Get user input values from the form
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    // Create a user object
    const obj = {
        username, email, phone
    }

    // Convert object to a string for localStorage
    const stringObj = JSON.stringify(obj);

    // Save to localStorage using email as the unique key
    localStorage.setItem(email, stringObj);

    // Display user on screen
    displayUser(obj);
}

// Function to show user data on the screen
function displayUser(obj){
    const ul = document.querySelector('ul'); // Get the <ul> to append new list items
    const li = document.createElement('li'); // Create a new <li> for this user

    // Set the text content to show user details
    li.textContent = obj.username + " - " + obj.email + " - " + obj.phone;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Set up delete functionality
    deleteBtn.addEventListener('click', () => {
        li.remove(); // Remove the <li> from the DOM
        localStorage.removeItem(obj.email); // Remove the user from localStorage
    });

    // Add the delete button to the list item
    li.appendChild(deleteBtn);

    // Add the list item to the unordered list
    ul.appendChild(li);
}
