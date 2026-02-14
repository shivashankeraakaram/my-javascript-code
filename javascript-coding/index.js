let todoItemContainer = document.getElementById("todoItemsContainer");

let todoItems=[
    {
        name:"Learn HTML"
    },
    {
        name:"Learn Css"
    },
    {
        name:"Learn JavaScript"
    },
    ];

function addingCourses(todoItem){
    
    
    let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container","d-flex","flex-row");
todoItemContainer.appendChild(todoElement);

let todoCheckboxElement = document.createElement("input");
todoCheckboxElement.type = "checkbox";
todoCheckboxElement.id = "mycheckbox";
todoCheckboxElement.classList.add("checkbox-input");
todoElement.appendChild(todoCheckboxElement);

let tododivElement = document.createElement("div");
tododivElement.classList.add("label-container","d-flex","flex-row");
tododivElement.id = "myDiv";

todoElement.appendChild(tododivElement);

let todoCheckboxLabelElement = document.createElement("label");
todoCheckboxLabelElement.textContent  = todoItem.name;
todoCheckboxLabelElement.classList.add("checkbox-label");
todoCheckboxLabelElement.htmlFor = "mycheckbox";

tododivElement.appendChild(todoCheckboxLabelElement);

let todoDeleteElement = document.createElement("i");
todoDeleteElement.classList.add ("fa", "fa-trash-o","delete-icon");

tododivElement.appendChild(todoDeleteElement);


}

for(let item of todoItems){
    console.log(item);
    addingCourses(item)
}


