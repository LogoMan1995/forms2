const form = document.querySelector('form'),
      wrapper = document.querySelector('.wrapper'),
      deleteAll = document.querySelector('#delete_btn');


document.addEventListener('DOMContentLoaded',renderList);


let todos = JSON.parse(localStorage.getItem('todos')) || [];


form.addEventListener('submit',formEvent);


function formEvent (e){
e.preventDefault();
    const formData = new FormData(e.target);
    const todoText = formData.get('todo');

    const todo = {
        text:todoText,
        checked:false
    }

    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
    renderList();
    e.target.reset();
}




function renderList() {
    wrapper.innerHTML = "";
    
    todos.forEach((todo, i) => {
        wrapper.innerHTML += `
            <div id="user-${i}">
                <label for='todo-check'>
                    ${i + 1}. ${todo.text}
                </label>
                <button onclick="deleteMessages(${i})">Удалить</button> 
                <input type="checkbox" name='todo-check' id="cheked-${i}" ${todo.checked ? 'checked' : ''} onchange="toggleChecked(${i})"
                
            </div>
        `;
    });
}

function deleteMessages(i){
    todos.splice(i,1);
    localStorage.setItem('todos',JSON.stringify(todos));
    renderList();
}

function toggleChecked (i){
    todos[i].checked = !todos[i].checked;
    localStorage.setItem('todos',JSON.stringify(todos));
    }

deleteAll.addEventListener('click' , () =>{
    todos = todos.filter(todo => !todo.checked);
    localStorage.setItem('todos',JSON.stringify(todos));
    renderList();
    })
         
     





