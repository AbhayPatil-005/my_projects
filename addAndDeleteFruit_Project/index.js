
const form = document.querySelector("form"); //access the first form
const fruits = document.querySelector(".fruits"); // access the first fruits class
const button = document.querySelector("button"); // access the first button
const addFruit = document.getElementById("fruit-to-add"); //access the input element by id
addFruit.setAttribute('placeholder',' Enter fruit name');

// creating the input element for fruit description functionality
const fruitDescription = document.createElement("input");
// setting it's id as description to access easily
fruitDescription.setAttribute('id','description');


//ADDING "ADD FRUIT" FUNCTIONALITY

form.addEventListener('submit', function(event){
    event.preventDefault()
    
    // created a newli element
    const newli = document.createElement('li');     
    newli.textContent = addFruit.value;

    // assigning classname
    newli.className = ("fruit");

    // created delete button
    const deletebtn = document.createElement('button');
    deletebtn.textContent="x";
    deletebtn.className="delete-btn"

    // created edit button
    const editbtn = document.createElement('button');
    editbtn.textContent="Edit";
    editbtn.className= "edit-btn"
    
    // creating description to the new li element created
    const p = document.createElement('p');
    p.textContent = fruitDescription.value;
    p.style.fontStyle='italic';
    p.setAttribute('class','description');
    

    //appending child to parent
    newli.appendChild(p);  
    newli.appendChild(deletebtn);
    newli.appendChild(editbtn);
    fruits.appendChild(newli);      
})

// ADDING EDIT BUTTON

// accessing the current li tag, this gives all the list items collection
const li = document.getElementsByTagName('li');
// so we gonna loop it to all the li elements
for (let i=0; i<li.length; i++){
    // creating the edit button without functionality
    const editbtn = document.createElement("button");
    editbtn.textContent="Edit";
    editbtn.className= "edit-btn"
    // appending editbtn to li as child
    li[i].appendChild(editbtn);
}

// ADDING DELETE FUNCTIONALITY 

fruits.addEventListener('click', function(event){
    // check if the classlist contains the classname "delete-btn"
    if (event.target.classList.contains("delete-btn"))
    {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    };
});

// ADDING FILTER FUNCTIONALITY 

// access the input element
const filter = document.getElementById('filter');
// add event listener
filter.addEventListener('keyup', function(event){
    // access the input text with lowercase form for convenience
    const textEntered = event.target.value.toLowerCase();
    // grab li elements through classname
    const fruitItems = document.getElementsByClassName("fruit");
    // access all the p tags through classname
    const inputDes = document.getElementsByClassName('description');

    for (let i = 0; i< fruitItems.length; i++){
        // first child becomes the text element // converting to lowercase
        const currentItem = fruitItems[i].firstChild.textContent.toLocaleLowerCase();
        // converting description of fruits to lowercase
        const fruitDes = inputDes[i].textContent.toLocaleLowerCase();
        // comparing the both fruit name and description to match the filter input
        if (currentItem.indexOf(textEntered)===-1 && fruitDes.indexOf(textEntered)===-1){
            fruitItems[i].style.display="none"; //if the entered text,is not found in fruit list then it hides
        }else{
            fruitItems[i].style.display="flex"; // if the entered text is found in fruit list then it displays
        }
    }
}); 

// ADDING FRUIT DESCRIPTION FUNCTIONALITY

// inserting it before add button
form.insertBefore(fruitDescription, button);
fruitDescription.setAttribute('placeholder', ' Enter the description');

// ADDING DESCRIPTION TO THE PRESENT LI ELEMENTS

// accessed all the li elements 
const eachFruit = document.querySelectorAll('li');
// accessed all the delete buttons inside the li elements 
const deleteBtn = document.querySelectorAll('.delete-btn')

// looping through one by one and adding description to each
for (let i = 0; i < li.length; i++){
    const p = document.createElement('p');
    p.textContent='King of fruits';
    p.style.fontStyle='italic';
    // setting the description a classname
    p.setAttribute('class','description' );
    eachFruit[i].insertBefore(p, deleteBtn[i]);
    console.log(p)
}