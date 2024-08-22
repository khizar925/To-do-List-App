const Data = {
  taskId: 0,
  taskText: "",
  taskStatus: "incomplete",
};

addTask = () => {
  Data.taskId++;
  const text = document.getElementById("input-form");
  Data.taskText = text.value;
  const taskContainer = document.querySelector(".tasks");
  const newTask = document.createElement("div");
  newTask.innerHTML = `<div class="task-list">
    <div id="task${Data.taskId}">
      <span id="Task-${Data.taskId}">${Data.taskText}</span>
      <button onclick="editTask(${Data.taskId})">Edit</button>
      <button onclick="deleteTask(${Data.taskId})">Delete</button>
      <button onclick="completed(${Data.taskId})">Mark as Complete</button>
      <br><br>
    </div>
  </div>`;
  text.value = "";
  taskContainer.appendChild(newTask);
  console.log(Data);
};

editTask = (taskId) => {
  const taskSpan = document.getElementById(`Task-${taskId}`);
  const currentText = taskSpan.textContent;
  const newText = prompt("Edit Your Task: ", currentText);
  taskSpan.textContent = newText;
};

deleteTask = (taskId) => {
  const element = document.getElementById(`task${taskId}`);
  element.parentNode.removeChild(element);
};

completed = (taskId) => {
  const element = document.getElementById(`Task-${taskId}`);
  element.style.textDecoration = "line-through";
  element.style.opacity = "0.5";
  element.style.color = "#6c757d";
};
