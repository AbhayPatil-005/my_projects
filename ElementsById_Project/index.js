// Get the header element and style it with a green background and orange bottom border
const header = document.getElementById("header");
header.style.backgroundColor = 'green';
header.style.borderBottom = "3px solid orange";

// Get the main heading element, update its text, and style it with orange color
const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Fruit World";
mainHeading.style.color = "orange";

// Get the basket heading element and style it with green color
const basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";

// Get the element with id 'thanks' and update the text to thank the user
const thanks = document.getElementById("thanks");
thanks.textContent = "Please visit us again!";
