const todolist = ['make dinner', 'wash dishes'];
rendertodoList();

function rendertodoList(){


    let todoListHTML = '';

    for(let i = 0; i < todolist.length; i++){
        const todo = todolist[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addTodo() {

    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todolist.push(name);
    console.log(todolist);

    inputElement.value = ''; //reset to the text box
    rendertodoList();
    
}