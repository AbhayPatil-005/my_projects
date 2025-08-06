
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
  
    if (editId){
        for (let i = 0; i<details.length; i++ ){
            if (details[i].id == editId){
                details[i].expenseAmount = object.expenseAmount;
                details[i].description = object.description;
                details[i].category = object.category;
            }
        }
        const li =document.getElementById(editId);
        li.firstChild.textContent= "₹."+object.expenseAmount+ "/- -- "+object.category+" -- "+ object.description+"   -->";
        

        sessionStorage.removeItem("editId");
        const submitBtn = document.querySelector('#submit');
        submitBtn.textContent = "Add Expense";

    }else{
        addData(details, object);
    }

    localStorage.setItem("expenseList", JSON.stringify(details));
    event.target.reset();

    const submitBtn = document.querySelector("#submit")
    submitBtn.textContent = "Add Expense";
    submitBtn.classList.remove("btn-success");
    submitBtn.classList.add("btn-primary");
}

function display(data){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    
    li.textContent = "₹."+data.expenseAmount +'/- -- '+ data.category+' -- '+ data.description +"   -->";
    li.id = data.id;
    

   
    const deleteButton = document.createElement('button');
    deleteButton.textContent="Delete Expense"
    deleteButton.className= "delete"
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
    

    const editButton = document.createElement('button');
    editButton.textContent="Edit Expense"
    editButton.className="edit"
    editButton.classList.add('btn', 'btn-warning', 'btn-sm', 'ms-2');


    deleteButton.addEventListener('click', ()=>deleteData(li, data.id));

    editButton.addEventListener('click', ()=>editData(data));
    

    li.appendChild(deleteButton);
    li.appendChild(editButton);
    ul.appendChild(li);
    
}

function addData(details, object){
    object.id = Date.now();
    details.push(object)
    display(object)
}

function deleteData(li, id){
    const details = JSON.parse(localStorage.getItem("expenseList")) || [];
    const newDetails = [];

    for (let i =0; i< details.length; i++){
        if (id != details[i].id){
            newDetails.push(details[i]);
        }
    }
    localStorage.setItem("expenseList", JSON.stringify(newDetails));
    li.remove();
}

function editData(data){
    console.log(data)
    const expenseAmount = document.querySelector('#amount');
    const description = document.querySelector('#description');
    const category = document.querySelector('#category');

    expenseAmount.value = data.expenseAmount
    description.value = data.description
    category.value = data.category
    
    sessionStorage.setItem("editId", data.id);

    const submitBtn = document.querySelector("#submit");
    submitBtn.textContent = "Update";
    submitBtn.classList.remove("btn-primary");
    submitBtn.classList.add("btn-success");
}