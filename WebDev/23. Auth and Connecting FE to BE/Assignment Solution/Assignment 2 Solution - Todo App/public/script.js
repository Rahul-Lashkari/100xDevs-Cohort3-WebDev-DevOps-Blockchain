
function moveToSignup() {
    document.getElementById("signup-container").style.display = "block";
    document.getElementById("signin-container").style.display = "none";
    document.getElementById("todos-container").style.display = "none";
}

function moveToSignin() {
    document.getElementById("signin-container").style.display = "block";
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("todos-container").style.display = "none";
}

function showTodoApp() {
    document.getElementById("signin-container").style.display = "none";
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("todos-container").style.display = "block";
    getTodos();
}

async function signup() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    try {
        const response = await axios.post("http://localhost:3000/signup", {
            username,
            password,
        });

        alert(response.data.message);

        if (response.data.message === "You are signed up successfully!") {
            moveToSignin();
        }
    } catch (error) {
        console.error("Error while signing up:", error);
    }
}

async function signin() {
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;

    try {
        const response = await axios.post("http://localhost:3000/signin", {
            username,
            password,
        });

        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            alert(response.data.message);
            showTodoApp();
        } else {
            alert(response.data.message);
        }
    } catch (error) {
        console.error("Error while signing in:", error);
    }
}

async function logout() {
    localStorage.removeItem("token");

    alert("You are logged out successfully!");

    moveToSignin();
}

async function getTodos() {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:3000/todos", {
            headers: { Authorization: token },
        });

        const todosList = document.getElementById("todos-list");
        
        todosList.innerHTML = "";

        if (response.data.length) {
            response.data.forEach((todo) => {
                const todoElement = createTodoElement(todo);
                todosList.appendChild(todoElement);
            });
        }
    } catch (error) {
        console.error("Error while getting To-Do list:", error);
    }
}

async function addTodo() {
    const inputElement = document.getElementById("input");
    const title = inputElement.value;

    if (title.trim() === "") {
        alert("Please write something to add to the To-Do list.");
        return;
    }

    try {
        const token = localStorage.getItem("token");
        await axios.post(
            "http://localhost:3000/todos",
            { title },
            {
                headers: { Authorization: token },
            }
        );

        inputElement.value = "";

        getTodos();
    } catch (error) {
        console.error("Error while adding a new To-Do item:", error);
    }
}

async function updateTodo(id, newTitle) {
    const token = localStorage.getItem("token");

    try {
        await axios.put(
            `http://localhost:3000/todos/${id}`,
            { title: newTitle },
            {
                headers: { Authorization: token },
            }
        );

        getTodos();
    } catch (error) {
        console.error("Error while updating a To-Do item:", error);
    }
}

async function deleteTodo(id) {
    const token = localStorage.getItem("token");

    try {
        await axios.delete(`http://localhost:3000/todos/${id}`, {
            headers: { Authorization: token },
        });

        getTodos();
    } catch (error) {
        console.error("Error while deleting a To-Do item:", error);
    }
}

async function toggleTodoDone(id) {
    const token = localStorage.getItem("token");

    try {
        await axios.put(`http://localhost:3000/todos/${id}/done`, {
            headers: { Authorization: token },
        });

        getTodos();
    } catch (error) {
        console.error("Error while toggling To-Do status:", error);
    }
}

function createTodoElement(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";

    const inputElement = createInputElement(todo.title);
    inputElement.readOnly = true;

    const updateBtn = createUpdateButton(inputElement, todo.id);
    const deleteBtn = createDeleteButton(todo.id);
    const doneCheckbox = createDoneCheckbox(todo.done, todo.id, inputElement);

    todoDiv.appendChild(inputElement);
    todoDiv.appendChild(doneCheckbox);
    todoDiv.appendChild(updateBtn);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function createInputElement(value) {
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.value = value;
    inputElement.readOnly = true;

    return inputElement;
}

function createUpdateButton(inputElement, id) {
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Edit";

    updateBtn.onclick = function () {
        if (inputElement.readOnly) {
            inputElement.readOnly = false;
            updateBtn.textContent = "Save";
            inputElement.focus(); 
            inputElement.style.outline = "1px solid #007BFF"; 
        } else {
            inputElement.readOnly = true;
            updateBtn.textContent = "Edit";
            inputElement.style.outline = "none"; 
            updateTodo(id, inputElement.value);
        }
    };

    return updateBtn;
}

function createDeleteButton(id) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        deleteTodo(id);
    };

    return deleteBtn;
}

async function toggleTodoDone(id, done) {
    const token = localStorage.getItem("token");

    try {
        await axios.put(
            `http://localhost:3000/todos/${id}/done`,
            { done: !done }, 
            {
                headers: { Authorization: token },
            }
        );

        getTodos();
    } catch (error) {
        console.error("Error while toggling To-Do status:", error);
    }
}

function createDoneCheckbox(done, id, inputElement) {
    const doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.checked = done;

    inputElement.style.textDecoration = done ? "line-through" : "none";

    doneCheckbox.onchange = function () {
        toggleTodoDone(id, done); 
        inputElement.style.textDecoration = doneCheckbox.checked ? "line-through" : "none"; 
    };

    return doneCheckbox;
}
