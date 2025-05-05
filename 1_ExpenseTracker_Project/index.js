// invoke initialize function only after the DOM is fully loaded  
document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    const details = JSON.parse(localStorage.getItem("expenseList")) || [];
    for (let i = 0; i < details.length; i++) {
        display(details[i]);
    }
    sessionStorage.removeItem("editId");
}
function handleFormSubmit(event){
    event.preventDefault();
    const expenseAmount = event.target.amount.value;
    const description = event.target.description.value;
    const category =event.target.category.value;
    
    const object = {
        expenseAmount, description, category
    };
    const details = JSON.parse(localStorage.getItem("expenseList")) || [];

    const editId = sessionStorage.getItem("editId");
    // Check for edit mode using sessionStorage
    // If there's an editId, update the existing record; else, add new data
    if (editId){
        for (let i = 0; i<details.length; i++ ){
            if (details[i].id == editId){
                details[i].expenseAmount = object.expenseAmount;
                details[i].description = object.description;
                details[i].category = object.category;
            }
        }
        const li =document.getElementById(editId);
        li.firstChild.textContent= object.expenseAmount+ " -- "+object.category+" -- "+ object.description+"   -->";
        

        sessionStorage.removeItem("editId");
        const submitBtn = document.querySelector('#submit');
        submitBtn.textContent = "Add Expense";

    }else{
        addData(details, object);
    }

    localStorage.setItem("expenseList", JSON.stringify(details));
    event.target.reset();
    // resetting the button back to its original state
    const submitBtn = document.querySelector("#submit")
    submitBtn.textContent = "Add Expense";
    submitBtn.classList.remove("btn-success");
    submitBtn.classList.add("btn-primary");
}
// display the data 
function display(data){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    
    li.textContent = data.expenseAmount +' -- '+ data.category+' -- '+ data.description +"   -->";
    li.id = data.id;
    

    // Create and style Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent="Delete Expense"
    deleteButton.className= "delete"
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
    
    // Create and style edit button
    const editButton = document.createElement('button');
    editButton.textContent="Edit Expense"
    editButton.className="edit"
    editButton.classList.add('btn', 'btn-warning', 'btn-sm', 'ms-2');

    // delete event listener
    deleteButton.addEventListener('click', ()=>deleteData(li, data.id));
    // edit event listener
    editButton.addEventListener('click', ()=>editData(data));
    
    // wrapping buttons inside li and li inside ul
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    ul.appendChild(li);
    
}
// adding data if new entry to be done
function addData(details, object){
    object.id = Date.now();
    details.push(object)
    display(object)
}
// delete functionality 
function deleteData(li, id){
    const details = JSON.parse(localStorage.getItem("expenseList")) || [];
    const newDetails = [];
    // Filter out the item to delete, then update localStorage with the new list
    for (let i =0; i< details.length; i++){
        if (id != details[i].id){
            newDetails.push(details[i]);
        }
    }
    localStorage.setItem("expenseList", JSON.stringify(newDetails));
    li.remove();
}
// edit functionality 
function editData(data){
    console.log(data)
    const expenseAmount = document.querySelector('#amount');
    const description = document.querySelector('#description');
    const category = document.querySelector('#category');
    // populating data
    expenseAmount.value = data.expenseAmount
    description.value = data.description
    category.value = data.category
    
    sessionStorage.setItem("editId", data.id);
    // changing the button to color green and its text to "Update"
    const submitBtn = document.querySelector("#submit");
    submitBtn.textContent = "Update";
    submitBtn.classList.remove("btn-primary");
    submitBtn.classList.add("btn-success");
}