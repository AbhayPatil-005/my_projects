// Wait for the DOM to be fully loaded before running initialize()
document.addEventListener("DOMContentLoaded", initialize);

// This function runs when the page loads
// It fetches existing users from localStorage and displays them
function initialize(){
    const usersList = JSON.parse(localStorage.getItem('usersList')) || [];
    for (let i = 0; i < usersList.length; i++){
        display(usersList[i]);
    }

    // Remove any previous edit session
    sessionStorage.removeItem("editId");
}

// Handles form submission for both add and update scenarios
function handleSubmit(event) {  
    event.preventDefault();  // Prevents default form reload on submit

    // Get user input values from the form
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    // Create an object to hold user details
    const userDetails = {
        username, email, phone
    };

    // Fetch existing users from localStorage
    const usersList = JSON.parse(localStorage.getItem('usersList')) || [];

    // Check if the form is in edit mode
    const editId = sessionStorage.getItem("editId");

    if (editId){
        // If editing, find the user by ID and update details
        for (let i = 0; i < usersList.length; i++) {
            if (usersList[i].id == editId){
                usersList[i].username = userDetails.username;
                usersList[i].email = userDetails.email;
                usersList[i].phone = userDetails.phone;
            }
        }

        // Update the DOM element's content
        const li = document.getElementById(editId);
        li.firstChild.textContent = userDetails.username + " " + userDetails.email + " " + userDetails.phone;

        // Clear edit state and reset button text
        sessionStorage.removeItem("editId");
        const submitBtn = document.querySelector("#button");
        submitBtn.textContent = "Submit";

    } else {
        // If adding new user, call addData
        addData(usersList, userDetails);
    }

    // Save updated list to localStorage
    localStorage.setItem('usersList', JSON.stringify(usersList));
}

// Displays a user item on the screen
function display(data) {
    const ul = document.querySelector('ul'); // Get the list element
    const li = document.createElement('li'); // Create a new list item

    // Set the text and id of the list item
    li.textContent = data.username + " " + data.email + " " + data.phone;
    li.id = data.id;

    ul.appendChild(li); // Add the list item to the list

    // Create and add a Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    // Create and add an Edit button
    const editButton  = document.createElement('button');
    editButton.textContent = "Edit";

    // Event listener to delete user
    deleteButton.addEventListener('click', () => deleteData(data.id, li));

    // Event listener to edit user
    editButton.addEventListener('click', () => editData(data));

    // Add buttons to the list item
    li.appendChild(deleteButton);
    li.appendChild(editButton);
}

// Adds new user data to usersList and updates the UI
function addData(usersList, userDetails) {
    userDetails.id = Date.now(); // Unique ID using timestamp
    usersList.push(userDetails); // Add new user to list
    display(userDetails);        // Display on screen
}

// Deletes a user from localStorage and the DOM
function deleteData(id, li) {
    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

    // Create a new list without the deleted user
    const updatedUsersList = [];

    for (let i = 0; i < usersList.length; i++) {
        if (id != usersList[i].id) {
            updatedUsersList.push(usersList[i]);
        }
    }

    // Save updated list and remove the list item from the DOM
    localStorage.setItem("usersList", JSON.stringify(updatedUsersList));
    li.remove();
}

// Fills the form with selected user's data for editing
function editData(data) {
    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');

    // Fill form with current user details
    usernameInput.value = data.username;
    emailInput.value = data.email;
    phoneInput.value = data.phone;

    // Save the user's ID for later use during update
    sessionStorage.setItem("editId", data.id);
    
    // Change the button text to "Update"
    const submitBtn = document.querySelector("#submit");
    submitBtn.textContent = "Update";
}
