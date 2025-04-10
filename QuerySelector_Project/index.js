// Styling Using QuerySelector Methods

// Select the element with id 'main-heading' and center-align its text
const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";

// Select the element with id 'basket-heading', move it slightly to the right, and set its text color
const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.marginLeft = "30px";
basketHeading.style.color = "Brown";

// Select the unordered list with class 'fruits' and style its container
const fruits = document.querySelector(".fruits");
fruits.style.padding = "30px";
fruits.style.backgroundColor = "gray";
fruits.style.borderRadius = "10px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.height = "50%";
fruits.style.listStyleType = "none"; // Removes default bullet points from list

// Select all <li> items inside the '.fruits' list and apply basic styling
const fruitItem = document.querySelectorAll(".fruits li");
for(i=0; i < fruitItem.length; i++){
    fruitItem[i].style.backgroundColor= "white";
    fruitItem[i].style.padding = '10px';
    fruitItem[i].style.borderRadius = '5px';
    fruitItem[i].style.margin = '10px';
}

// Style even-numbered <li> items with a different background and text color
const fruitList = document.querySelectorAll(".fruits :nth-child(even)");
for (let i=0; i<fruitList.length; i++){
    fruitList[i].style.backgroundColor="brown";
    fruitList[i].style.color="white";   
}

// Style odd-numbered <li> items with another background color
const fruitOdd = document.querySelectorAll(".fruits :nth-child(odd)");
for (let i = 0; i < fruitOdd.length; i++){
    fruitOdd[i].style.backgroundColor="beige";
}
