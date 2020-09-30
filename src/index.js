document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")

  taskForm.addEventListener("submit", function(event){
    //one method
    //const newTask = taskForm["new-task-description"].value
    //taskList.innerHTML += `- ${newTask} <br>`;
    // second method
    let newTask = document.createElement('li')
    newTask.innerHTML = taskForm["new-task-description"].value
    taskList.appendChild(newTask)


    event.preventDefault()
  });

});
