const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios.get("https://crudcrud.com/api/a29f8103734c475b800971657cf63bec/todo").then((res) => {
    console.log(res);
  }).catch((error) => {
    console.log(error);
  })
}

function postTodo() {
  // Write your code here
  axios.post("https://crudcrud.com/api/a29f8103734c475b800971657cf63bec/todo", {
    title:"Meet Doctor",
    completed: false
  })
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)});
}

function putTodo() {
  // Write your code here
  axios.put("https://crudcrud.com/api/a29f8103734c475b800971657cf63bec/todo/6825ea4104684f03e835fcf2 ", {
    title: "MeetDoctor",
    completed:true
  }).then((res) => {
    console.log(res);
  })
    .catch((res) => {
    console.log(res)
  });
}

function deleteTodo() {
  // Write your code here
  axios.delete("https://crudcrud.com/api/a29f8103734c475b800971657cf63bec/todo/6825ea4104684f03e835fcf1")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
}
