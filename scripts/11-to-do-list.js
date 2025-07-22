const todolist = [{
    name: 'make dinner',
    dueDate:'2022-12-22'
 }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
}];

rendertodoList();

function rendertodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject; //short form for the above comment
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
         <button onclick="
            todolist.splice(${i}, 1); 
                rendertodoList();
        " class="delete-todo-button">Delete</button>
         `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    const name = inputElement.value;
    todolist.push({
        //name: name,
        //dueDate: dueDate
        name, 
        dueDate //short cut for the above code
    });

    inputElement.value = ''; //reset to the text box
    rendertodoList();
}
