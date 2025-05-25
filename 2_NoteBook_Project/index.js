// Keeps track of the total number of notes displayed
let totalCount = 0;

// Handles the note form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent page reload

    // Create a note object using input values
    const notes = {
        noteTitle: event.target.noteTitle.value,
        noteDescription: event.target.description.value
    };

    // Send the note to the backend (CRUDCRUD API)
    axios.post("https://crudcrud.com/api/8078ae94a2ff4a68953f723f419a08ac/noteList", notes)
    .then((result) => {
        // Display the newly created note on the page
        displayNotes(result.data);

        // Update counters and input fields
        totalCount++;
        document.getElementById('totalNotes').value = totalCount;
        document.getElementById('showing').value = totalCount;
        // Reset the input fields
        document.getElementById('noteTitle').value = '';
        document.getElementById('description').value = '';
    })
    .catch((error) => {
        console.log(error);
    });

    // These two lines are not needed here because they are already inside the `.then()` block
    // But I won't remove them unless you approve
    document.getElementById('noteTitle').value = '';
    document.getElementById('description').value = '';
}

// Filtering logic triggered on every key press in the search input
const filterNote = document.getElementById('searchNotes');
filterNote.addEventListener('keyup', filter);

function filter() {
    const textEntered = document.getElementById('searchNotes').value.toLowerCase(); // Search query
    const classLi = document.getElementsByClassName('classLi'); // All note items
    let counter = 0;

    // Loop through all note items
    for (let i = 0; i < classLi.length; i++) {
        const currentTitle = classLi[i].children[0].textContent.toLowerCase(); // Note title
        const currentDesc = classLi[i].children[1].textContent.toLowerCase(); // Note description

        // Show/hide based on whether search matches title or description
        if (currentTitle.indexOf(textEntered) === -1 && currentDesc.indexOf(textEntered) === -1) {
            classLi[i].style.display = 'none';
        } else {
            classLi[i].style.display = '';
            counter++;
        }
    }

    // Update showing count
    document.getElementById('showing').value = counter;
}

// Displays a single note object on the UI
function displayNotes(notesData) {
    const notesli = document.createElement('li');
    notesli.className = 'classLi';

    // Create and add title paragraph
    const paraTitle = document.createElement('p');
    paraTitle.textContent = `${notesData.noteTitle}`;
    paraTitle.className = 'title';
    notesli.appendChild(paraTitle);

    // Create and add description paragraph
    const paraDescr = document.createElement('p');
    paraDescr.textContent = `${notesData.noteDescription}`;
    paraDescr.className = 'notes';
    notesli.appendChild(paraDescr);

    // Create and add delete button
    const deletebtn = document.createElement('button');
    deletebtn.textContent = "Delete";
    notesli.appendChild(deletebtn);

    // Append the list item to the <ul>
    const ul = document.querySelector('ul');
    ul.appendChild(notesli);

    // Add delete logic for this note
    deletebtn.addEventListener('click', () => {
        axios.delete(`https://crudcrud.com/api/8078ae94a2ff4a68953f723f419a08ac/noteList/${notesData._id}`)
        .then((result) => {
            console.log(result);
            notesli.remove(); // Remove from UI
            totalCount--;     // Decrease total count
            document.getElementById('totalNotes').value = totalCount;
            filter(); // Re-apply filter in case search is active
        })
        .catch((error) => {
            console.log(error);
        });
    });
}

// Load all existing notes when the page loads
window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/8078ae94a2ff4a68953f723f419a08ac/noteList")
    .then((result) => {
        totalCount = result.data.length;
        for (let i = 0; i < result.data.length; i++) {
            displayNotes(result.data[i]);
        }
    })
    .catch((error) => {
        console.log(error);
    });

    // lets update the actual count loaded
    document.getElementById('totalNotes').value = totalCount;
    document.getElementById('showing').value = totalCount;
});
