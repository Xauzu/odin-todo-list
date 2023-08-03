import todoItem from "./todoItem";

export default function todoList(name) {
    this.name = name || "";
    this.data = [];
};

todoList.prototype.getData = function () { this.clean(); return this.data; };
todoList.prototype.getLastItem = function () { return this.data[this.data.length - 1]; };
todoList.prototype.getName = function () { return this.name; };
todoList.prototype.appendItem = function (item) { this.data.push(item); };
todoList.prototype.appendTodoItem = function (item) { this.data.push(new todoItem(...item)); };
todoList.prototype.removeItemAt = function (index) { this.data.splice(index, 1); };
todoList.prototype.setName = function (name) { this.name = name; };
todoList.prototype.clean = function () {
    for (let i = this.data.length - 1; i >= 0; i--) {
        if (this.data[i].item[5] === 1) {
            this.removeItemAt(i);
        }
    }
    return this.data;
}

export function todoListForm(title, buttonName, formAction, data, cb) {
    const main = document.createElement('form');
    main.classList.add('action-form');

    const heading = document.createElement('div');
    heading.classList.add('form-title');
    heading.textContent = title;
    main.appendChild(heading);

    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.classList.add('form-input');
    name.placeholder = 'name';
    main.appendChild(name);

    // Append data to fields if data is given to the function
    if (data) {
        name.value = data[0];
    }

    const actionButtons = document.createElement('div');
    actionButtons.classList.add('form-action-buttons-div');
    main.appendChild(actionButtons);

    const leftActionButton = document.createElement('button');
    leftActionButton.classList.add('form-action-buttons');
    leftActionButton.textContent = buttonName;
    leftActionButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value.length > 0) {
            const values = [name.value];
            formAction(...values);
            e.target.parentNode.parentNode.remove();
            if (cb) cb();
        }
        else alert('Empty name field');
    });
    actionButtons.appendChild(leftActionButton);

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('form-action-buttons');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentNode.parentNode.remove();
    });
    actionButtons.appendChild(cancelButton);

    return main;
};