// UNDERSTANDING THE LOCAL STORAGE 

// access the form element through id to add event Listener
const myForm = document.getElementById('myform');
myForm.addEventListener('submit', handleFormSubmit); // handleFormSubmit is the function.

function handleFormSubmit(event){
    event.preventDefault()

    // accessing all the the form input's value
    const username = event.target.username.value
    const email = event.target.email.value
    const phone = event.target.Phone.value

    // storing it in the local storage through method setItem('key','value')
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('Phone',phone);
}