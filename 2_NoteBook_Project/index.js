
let totalCount = 0
function handleFormSubmit(event){
    event.preventDefault()
    const notes = {
        noteTitle : event.target.noteTitle.value,
        noteDescription : event.target.description.value
    }

    axios.post("https://crudcrud.com/api/8078ae94a2ff4a68953f723f419a08ac/noteList", notes)
    .then((result)=>{
        displayNotes(result.data)
        totalCount++
        document.getElementById('totalNotes').value = totalCount;
        document.getElementById('showing').value = totalCount;

        document.getElementById('noteTitle').value = '';
        document.getElementById('description').value = '';
    })
    .catch((error)=>{
        console.log(error)
    });
    document.getElementById('noteTitle').value = '';
    document.getElementById('description').value='';
}
const filterNote = document.getElementById('searchNotes');
filterNote.addEventListener('keyup',filter);
function filter() {
    const textEntered = document.getElementById('searchNotes').value.toLowerCase();
    const classLi = document.getElementsByClassName('classLi');
    let counter = 0;
    for (let i = 0; i < classLi.length; i++) {
        const currentTitle = classLi[i].children[0].textContent.toLowerCase();
        const currentDesc = classLi[i].children[1].textContent.toLowerCase();
        if (currentTitle.indexOf(textEntered) === -1 && currentDesc.indexOf(textEntered) === -1) {
            classLi[i].style.display = 'none';
        } else {
            classLi[i].style.display = '';
            counter++;
        }
    }
    document.getElementById('showing').value = counter;
}

function displayNotes(notesData){
    const notesli = document.createElement('li');
    notesli.className='classLi'

    const paraTitle = document.createElement('p');
    paraTitle.textContent=`${notesData.noteTitle}`;
    paraTitle.className='title';
    notesli.appendChild(paraTitle);

    const paraDescr = document.createElement('p');
    paraDescr.textContent = `${notesData.noteDescription}`;
    paraDescr.className='notes'
    notesli.appendChild(paraDescr);

    const deletebtn = document.createElement('button');
    deletebtn.textContent = "Delete";
    notesli.appendChild(deletebtn);

    const ul = document.querySelector('ul');
    ul.appendChild(notesli);

    deletebtn.addEventListener('click',()=>{
        
        
        axios.delete(`https://crudcrud.com/api/8078ae94a2ff4a68953f723f419a08ac/noteList/${notesData._id}`)
        .then((result)=>{
            console.log(result);
            notesli.remove();
            totalCount--
            document.getElementById('totalNotes').value = totalCount;
            filter()
        })
        .catch((error)=>{
            console.log(error);
        })
    })


}
window.addEventListener('DOMContentLoaded',()=>{
    
    axios.get("https://crudcrud.com/api/8078ae94a2ff4a68953f723f419a08ac/noteList")
    .then((result)=>{
        totalCount = result.data.length;
        for (i=0;i<result.data.length;i++){
            displayNotes(result.data[i]);
        }
        
    })
    .catch((error)=>{
        console.log(error);
    })
    document.getElementById('totalNotes').value = totalCount;
    document.getElementById('showing').value = totalCount;
})   