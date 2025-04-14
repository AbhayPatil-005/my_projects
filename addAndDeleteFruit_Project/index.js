
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

