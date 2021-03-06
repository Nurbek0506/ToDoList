//Selectors   O'zgaruvchilar
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter-todo')

//Event Listener   Hodisalar
// document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)


//Functions Funksiyalar
function addTodo(event) {
    event.preventDefault();
    
    //todo  div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    // // add todo localStorage
    // saveLocalTodos(todoInput.value);
    
    //check mark todoButton
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    
    //check  trash todoButton
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    //append todo list
    todoList.appendChild(todoDiv);

    //clear todo value
    todoInput.value = ""
}

function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
        
    }

    //check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
//  Filter
function filterTodo(e) {
    const todos = document.querySelectorAll('.todo');
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = "none";
                } 
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = "none";
                }
                break;
        
            default:
                break;
        }
    })
}

// localStorage

// function saveLocalTodos(todo) {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos.JSON.parse(localStorage.getItem("todos"));
//     }
    
//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

