const Data = {
  taskId: 0,
  taskText: "",
  taskStatus: "incomplete",
};

function addTask() {
  Data.taskId++;
  const text = document.getElementById("input-form");
  Data.taskText = text.value.trim();
  if (Data.taskText === "") return;

  const taskContainer = document.querySelector(".tasks");

  const newTask = document.createElement("div");
  newTask.className = "task-list";
  newTask.id = `task${Data.taskId}`;
  newTask.innerHTML = `
      <span id="Task-${Data.taskId}">${Data.taskText}</span>
      <div class="task-buttons">
          <button class="task-btn edit-btn" onclick="editTask(${Data.taskId})">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <span>Edit</span>
          </button>
          <button class="task-btn delete-btn" onclick="deleteTask(${Data.taskId})">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              <span>Delete</span>
          </button>
          <button class="task-btn complete-btn" onclick="completed(${Data.taskId})">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Complete</span>
          </button>
      </div>
  `;

  text.value = "";
  taskContainer.appendChild(newTask);
}

function editTask(taskId) {
  const taskSpan = document.getElementById(`Task-${taskId}`);
  const currentText = taskSpan.textContent;
  const newText = prompt("Edit Your Task: ", currentText);
  if (newText !== null && newText.trim() !== "") {
      taskSpan.textContent = newText.trim();
  }
}

function deleteTask(taskId) {
  const element = document.getElementById(`task${taskId}`);
  element.remove();
}

function completed(taskId) {
  const element = document.getElementById(`Task-${taskId}`);
  element.style.textDecoration = "line-through";
  element.style.opacity = "0.5";
  element.style.color = "#6c757d";
}