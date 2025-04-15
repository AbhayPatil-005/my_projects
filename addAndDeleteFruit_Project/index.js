
const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

//add functionality
form.addEventListener('submit', function(event){
    event.preventDefault()
    const addFruit = document.getElementById("fruit-to-add");
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
    //appending child to parent
    newli.appendChild(deletebtn);
    newli.appendChild(editbtn);
    fruits.appendChild(newli);
    
                                   
})
// adding edit button
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
// Delete Funcitonality
fruits.addEventListener('click', function(event){
    // event.preventDefault()
    if (event.target.classList.contains("delete-btn"))
    {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    };
});

// adding filter functionality
// access the input element
const filter = document.getElementById('filter');
// add event listener
filter.addEventListener('keyup', function(event){
    // access the input text with lowercase form for convenience
    const textEntered = event.target.value.toLowerCase();
    // grab li elements
    const fruitItems = document.getElementsByClassName("fruit");
    for (let i = 0; i< fruitItems.length; i++){
        const currentItem = fruitItems[i].firstChild.textContent.toLocaleLowerCase();
        if (currentItem.indexOf(textEntered)===-1){
            fruitItems[i].style.display="none"; //if the entered text,is not found in fruit list then it hides
        }else{
            fruitItems[i].style.display="flex"; // if the entered text is found in fruit list then it displays
        }
    }
}); 
