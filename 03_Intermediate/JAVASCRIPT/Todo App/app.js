const allBtn = document.querySelector(".all-btn");
const activeBtn = document.querySelector(".active-btn");
const completedBtn = document.querySelector(".completed-btn");
const input = document.querySelector(".input-bar");
const todos = [];
const savedTodos = sessionStorage.getItem("todos");
const tasklist = document.querySelector(".tasklist-top");
const clearCompleteBtn = document.querySelector(".clear-btn");
let currentState = false;
const itemsRemaining = document.querySelector(".tasks-no");
const moonBtn = document.querySelector(".moon-img");
const sunBtn = document.querySelector(".sun-img");

itemsRemaining.textContent = "0 items left";

moonBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

sunBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

if (savedTodos) {
  todos.push(...JSON.parse(savedTodos));
}

tasklist.innerHTML = "";

todos.forEach((todo, index) => {
  const tasks = `
        <div class="tasklist-top">
          <div class="task">
            <div class="task-text">
              <span class="radio-circle round${todo.completed ? " checked" : ""}"><i class="fa-solid fa-check fa-2xs${todo.completed ? " block-2" : ""}" style="color: rgb(255, 255, 255);"></i></span>
              <p class="task-para${todo.completed ? " dash" : ""}">${todo.text}</p>
            </div>
            <div>
              <img src="icon-cross.svg" alt="" class="remove-task" data-index = "${index}" />
            </div>
          </div>
        </div>`;
  tasklist.innerHTML += tasks;
  itemsRemaining.textContent = `${todos.length} items left`;
});

input.value = "";

input.addEventListener("keydown", (e) => {
  const key = e.key;

  if (input.value === "") return;

  if (key === "Enter") {
    e.preventDefault();
    const todo = {
      text: input.value,
      completed: false,
    };
    todos.push(todo);
    sessionStorage.setItem("todos", JSON.stringify(todos));
    // console.log("Pushed into", todos);
    tasklist.innerHTML = "";

    todos.forEach((todo, index) => {
      const tasks = `
        <div class="tasklist-top">
          <div class="task">
            <div class="task-text">
              <span class="radio-circle round${todo.completed ? " checked" : ""}"><i class="fa-solid fa-check fa-2xs${todo.completed ? " block-2" : ""}" style="color: rgb(255, 255, 255);"></i></span>
              <p class="task-para${todo.completed ? " dash" : ""}">${todo.text}</p>
            </div>
            <div>
              <img src="icon-cross.svg" alt="" class="remove-task" data-index = "${index}" />
            </div>
          </div>
        </div>`;
      tasklist.innerHTML += tasks;
      itemsRemaining.textContent = `${todos.length} items left`;
    });

    input.value = "";
  }
  const checkTasks = document.querySelectorAll(".round");
  const taskPara = document.querySelectorAll(".task-para");
  const checkIcon = document.querySelectorAll(".fa-2xs");
  const deleteTask = document.querySelectorAll(".remove-task");
  checkTasks.forEach((task, index) => {
    task.addEventListener("click", (e) => {
      // console.log("task", task, index);
      let currentTodo = todos[index];
      currentTodo = {
        text: currentTodo.text,
        completed: !currentTodo.completed,
      };
      todos[index] = currentTodo;
      sessionStorage.setItem("todos", JSON.stringify(todos));
      if (currentTodo.completed === true) {
        task.classList.add("checked");
        taskPara[index].classList.add("dash");
        checkIcon[index].classList.add("block-2");
      } else {
        task.classList.remove("checked");
        taskPara[index].classList.remove("dash");
        checkIcon[index].classList.remove("block-2");
      }
    });
    sessionStorage.setItem("todos", JSON.stringify(todos));
  });
});

tasklist.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-task")) {
    const index = Number(e.target.dataset.index);

    console.log(index);

    todos.splice(index, 1);

    sessionStorage.setItem("todos", JSON.stringify(todos));

    tasklist.innerHTML = "";

    todos.forEach((todo, index) => {
      const tasks = `
      <div class="tasklist-top">
        <div class="task">
          <div class="task-text">
            <span class="radio-circle round${todo.completed ? " checked" : ""}">
              <i class="fa-solid fa-check fa-2xs${todo.completed ? " block-2" : ""}" style="color: rgb(255,255,255);"></i>
            </span>
            <p class="task-para${todo.completed ? " dash" : ""}">${todo.text}</p>
          </div>
          <div>
            <img src="icon-cross.svg" class="remove-task" data-index="${index}">
          </div>
        </div>
      </div>`;
      tasklist.innerHTML += tasks;
    });
    itemsRemaining.textContent = `${todos.length} items left`;
  }
});

allBtn.addEventListener("click", (e) => {
  todos.forEach((todo, index) => {
    allBtn.style.cssText = "color:hsl(220, 98%, 61%)";
    completedBtn.style.cssText = "color:hsl(236, 9%, 61%);";
    activeBtn.style.cssText = "color:hsl(236, 9%, 61%);";
    const taskContain = document.querySelectorAll(".task");
    const removeTask = taskContain[index];

    removeTask.classList.remove("none");
    removeTask.classList.add("block");
  });
});

activeBtn.addEventListener("click", (e) => {
  todos.forEach((todo, index) => {
    activeBtn.style.cssText = "color:hsl(220, 98%, 61%)";
    allBtn.style.cssText = "color:hsl(236, 9%, 61%);";
    completedBtn.style.cssText = "color:hsl(236, 9%, 61%);";
    const taskContain = document.querySelectorAll(".task");
    const removeTask = taskContain[index];

    if (todos[index].completed === false) {
      removeTask.classList.remove("none");
      removeTask.classList.add("block");
    } else {
      removeTask.classList.remove("block");
      removeTask.classList.add("none");
    }
  });
});

completedBtn.addEventListener("click", (e) => {
  todos.forEach((todo, index) => {
    completedBtn.style.cssText = "color:hsl(220, 98%, 61%)";
    allBtn.style.cssText = "color:hsl(236, 9%, 61%);";
    activeBtn.style.cssText = "color:hsl(236, 9%, 61%);";
    const taskContain = document.querySelectorAll(".task");
    const removeTask = taskContain[index];

    if (todos[index].completed === true) {
      removeTask.classList.remove("none");
      removeTask.classList.add("block");
    } else {
      removeTask.classList.remove("block");
      removeTask.classList.add("none");
    }
  });
});

clearCompleteBtn.addEventListener("click", (e) => {
  completedBtn.style.cssText = "color:hsl(236, 9%, 61%)";
  allBtn.style.cssText = "color:hsl(236, 9%, 61%);";
  activeBtn.style.cssText = "color:hsl(236, 9%, 61%);";
  const taskContain = document.querySelectorAll(".task");

  todos.splice(0, todos.length, ...todos.filter((todo) => !todo.completed));

  sessionStorage.setItem("todos", JSON.stringify(todos));

  tasklist.innerHTML = "";

  todos.forEach((todo, index) => {
    const tasks = `
    <div class="tasklist-top">
      <div class="task">
        <div class="task-text">
          <span class="radio-circle round${todo.completed ? " checked" : ""}"><i class="fa-solid fa-check fa-2xs" style="color: rgb(255, 255, 255);"></i></span>
          <p class="task-para${todo.completed ? " dash" : ""}">${todo.text}</p>
        </div>
        <div>
          <img src="icon-cross.svg" alt="" class="remove-task" />
        </div>
      </div>
    </div>`;
    tasklist.innerHTML += tasks;
  });
  const checkTasks = document.querySelectorAll(".round");
  const taskPara = document.querySelectorAll(".task-para");
  let itemLeft;
  checkTasks.forEach((task, index) => {
    task.addEventListener("click", (e) => {
      // console.log("task", task, index);
      let currentTodo = todos[index];
      currentTodo = {
        text: currentTodo.text,
        completed: !currentTodo.completed,
      };
      todos[index] = currentTodo;
      if (currentTodo.completed === true) {
        task.classList.add("checked");
        taskPara[index].classList.add("dash");
      } else {
        task.classList.remove("checked");
        taskPara[index].classList.remove("dash");
      }
    });
    itemsRemaining.textContent = `${todos.length} items left`;
  });
});
