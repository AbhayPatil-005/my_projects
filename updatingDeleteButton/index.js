// Wait until the DOM is fully loaded before executing initialization
document.addEventListener("DOMContentLoaded", initialize);

// This function loads existing user data from localStorage and displays it
function initialize() {
    const usersList = JSON.parse(localStorage.getItem('usersList')) || [];

    // Loop through each user and render it on the page
    for (let i = 0; i < usersList.length; i++) {
        display(usersList[i]);
    }
}

// Handles form submission to add a new user
function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the page from reloading on form submission

    // Get input values from the form
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    // Create a user object with form data
    const userDetails = {
        username,
        email,
        phone
    };

    // Get existing users from localStorage or use an empty array if none
    const usersList = JSON.parse(localStorage.getItem('usersList')) || [];

    // Add a unique ID to the user using current timestamp
    userDetails.id = Date.now();

    // Save the new user to the list and display it
    usersList.push(userDetails);
    display(userDetails);

    // Update localStorage with the new list
    localStorage.setItem("usersList", JSON.stringify(usersList));
}

// Displays a user's info in the list
function display(data) {
    const ul = document.querySelector('ul'); // Get the list element
    const li = document.createElement('li'); // Create a new list item
    li.textContent = data.username + " " + data.email + " " + data.phone;

    // Create a Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    // Add click event to the button to remove the user
    deleteButton.addEventListener('click', () => deleteData(data.id, li));

    // Append the button and the list item to the list
    li.appendChild(deleteButton);
    ul.appendChild(li);
}

// Deletes a user by ID from localStorage and removes their element from the UI
function deleteData(id, li) {
    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

    // Filter out the user with the matching ID
    const updatedUsersList = [];

    for (let i = 0; i < usersList.length; i++) {
        if (id != usersList[i].id) {
            updatedUsersList.push(usersList[i]);
        }
    }

    // Save the updated list to localStorage and remove the item from UI
    localStorage.setItem("usersList", JSON.stringify(updatedUsersList));
    li.remove();
}
