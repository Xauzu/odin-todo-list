import edit from './edit.png';
import del from './delete.png';
import { compareAsc, parseISO, format } from 'date-fns';

export default function todoItem(name, description, priority, dueDate, complete, del) {
    // String String int(0->2) Date boolean delete?
    this.item = [name, description, priority, dueDate, complete, del || 0];
};

todoItem.prototype.getItem = function () { return this.item; };
todoItem.prototype.getName = function () { return this.item[0]; };
todoItem.prototype.getDescription = function () { return this.item[1]; };
todoItem.prototype.getPriority = function () { return this.item[2]; };
todoItem.prototype.getDueDate = function () { return this.item[3]; };
todoItem.prototype.isComplete = function () { return this.item[4]; };
todoItem.prototype.setName = function (value) { return this.item[0] = value; };
todoItem.prototype.setDescription = function (value) { return this.item[1] = value; };
todoItem.prototype.setPriority = function (value) { return this.item[2] = value; };
todoItem.prototype.setDueDate = function (value) { return this.item[3] = value; };
todoItem.prototype.setComplete = function (value) { return this.item[4] = value; };
todoItem.prototype.delete = function () { this.item[5] = 1; };

// Calculates to decide what is displayed
function calcTimeDisplay(dueDate) {
    const dateDiff = compareAsc(new Date(), dueDate);

    let displayDate;
    if (dateDiff === 1 || dateDiff === 0) {
        displayDate = 'Passed';
    } else {
        const currentDate = new Date();

        if (dueDate.getFullYear() !== currentDate.getFullYear()) {
            displayDate = format(dueDate, "M/d/yy");
        }
        else if (dueDate.getDay() !== currentDate.getDay()) {
            displayDate = format(dueDate, "M/d")
        }
        else {
            displayDate = format(dueDate, "h:mm aaaaa'm'");
        }
    }
    return displayDate;
}

// Calculates the class string for css styling
function calcPrio(prio) {
    let classText;
    switch (+prio) {
        case 1:
            classText = "p-med";
            break;
        case 2:
            classText = "p-high";
            break;
        case 0:
        default:
            classText = "p-low";
    }
    return classText;
}
// <done:checkBox> <title> - <description:huh> <dueDate> <edit btn:huh> <delete btn:huh>, <priority:color>
//
//  priority, 0 = gray, 1 = orange, 2 = red
//
//  * huh = hidden until hover
todoItem.prototype.createItemDisplay = function (id, save) {
    // Parent Node
    const displayItem = document.createElement('div');
    displayItem.classList.add('todo-item');
    displayItem.id = 'todo-item-' + id;

    // Checkbox
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkBox');
    checkBox.checked = this.isComplete();
    checkBox.addEventListener('change', () => {
        this.setComplete(checkBox.checked);
    });
    displayItem.appendChild(checkBox);

    // Priority
    displayItem.classList.add(calcPrio(this.getPriority()));

    // Name
    const name = document.createElement('div');
    name.textContent = this.getName();
    displayItem.appendChild(name);

    // Description, Hidden until hover
    let description = this.getDescription();
    if (description && this.getDescription !== '') {
        description = document.createElement('div');
        description.textContent = this.getDescription();
        description.classList.add('description', 'hide-opacity2');
        displayItem.appendChild(description);
    }

    // Due Date
    const dueDate = document.createElement('div');
    dueDate.title = format(this.getDueDate(), "M/d/yy, h:mm aaaaa'm'");
    dueDate.textContent = calcTimeDisplay(this.getDueDate());
    if (dueDate.textContent === 'Passed')
        dueDate.setAttribute('color', 'red');

    displayItem.appendChild(dueDate);

    // Edit Button, Hidden until hover
    const editButton = document.createElement('button');
    editButton.classList.add('todo-button', 'hide-opacity');
    const editImg = new Image();
    editImg.draggable = false;
    editImg.src = edit;
    editImg.classList.add('item-img');
    editButton.appendChild(editImg);
    displayItem.appendChild(editButton);
    editButton.addEventListener('click', (e) => {
        if (!document.querySelector('.action-form')) {
            const editItem = todoItemForm('Edit item', 'Confirm', (newName, newDesc, newPrio, newdueDate, newComplete) => {

                // Update values in the item (persist through reload)
                this.item = [newName || this.item[0],
                newDesc || this.item[1],
                newPrio || this.item[2],
                newdueDate || this.item[3],
                newComplete || this.item[4],
                this.item[5]];

                // Update values on the web page
                if (name) name.textContent = newName;
                if (description) description.textContent = newDesc;

                dueDate.title = format(this.getDueDate(), "M/d/yy, h:mm aaaaa'm'");
                dueDate.textContent = calcTimeDisplay(this.getDueDate());
                if (dueDate.textContent === 'Passed')
                    dueDate.setAttribute('color', 'red');

                checkBox.checked = this.isComplete();

                displayItem.classList.remove('p-low', 'p-med', 'p-high');
                displayItem.classList.add(calcPrio(this.item[2]));

                // Save to localStorage
                save();

            }, this.item);
            e.target.parentNode.parentNode.parentNode.appendChild(editItem);
        }
    });

    // Delete Button, Hidden until hover
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo-button', 'hide-opacity');
    const deleteImg = new Image();
    deleteImg.draggable = false;
    deleteImg.src = del;
    deleteImg.classList.add('item-img');
    deleteButton.appendChild(deleteImg);
    displayItem.appendChild(deleteButton);
    deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.classList.add('hide');
        this.delete();

        // Save to localStorage
        save();
    });

    displayItem.addEventListener('mouseenter', () => {
        if (!document.querySelector('.action-form')) {
            if (description) description.classList.remove('hide-opacity2');
            editButton.classList.remove('hide-opacity');
            deleteButton.classList.remove('hide-opacity');
        }
    });
    displayItem.addEventListener('mouseleave', () => {
        if (description) description.classList.add('hide-opacity2');
        editButton.classList.add('hide-opacity');
        deleteButton.classList.add('hide-opacity');
    });

    return displayItem;
};

export function createAddDisplay(cb) {
    const row = document.createElement('div');
    row.classList.add('todo-item');
    row.style = 'margin-left: 0;'

    const addButton = document.createElement('button');
    addButton.classList.add('add-button', 'todo-button', 'hide-opacity');
    addButton.textContent = '+';
    addButton.addEventListener('click', (e) => {
        if (!document.querySelector('.action-form')) {
            const addItemForm = todoItemForm('Add item', 'Add', (newName, newDesc, newPrio, newdueDate, newComplete) => {
                cb(newName, newDesc, newPrio, newdueDate, newComplete);
            });
            addItemForm.classList.add('add-form');
            e.target.parentNode.parentNode.appendChild(addItemForm);
        }
    });
    row.appendChild(addButton);

    row.addEventListener('mouseenter', () => {
        if (!document.querySelector('.action-form')) {
            addButton.classList.remove('hide-opacity');
        }
    });
    row.addEventListener('mouseleave', () => {
        addButton.classList.add('hide-opacity');
    });

    return row;
};

export function todoItemForm(title, buttonName, formAction, data, cb) {
    const main = document.createElement('form');
    main.classList.add('action-form');

    const heading = document.createElement('div');
    heading.classList.add('form-title');
    heading.textContent = title;
    main.appendChild(heading);

    //this.item = [name, description, priority, dueDate, complete, 0];
    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.classList.add('form-input');
    name.placeholder = 'name';
    main.appendChild(name);

    const description = document.createElement('textarea');
    description.setAttribute('rows', '8');
    description.setAttribute('cols', '30');
    description.classList.add('form-input');
    description.placeholder = 'description';
    main.appendChild(description);

    const priority = document.createElement('input');
    priority.setAttribute('type', 'number');
    priority.setAttribute('min', 0);
    priority.setAttribute('max', 2);
    priority.defaultValue = 0;
    priority.classList.add('form-input');
    main.appendChild(priority);

    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'datetime-local');
    let d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    dueDate.value = d.toISOString().slice(0, 16);
    main.appendChild(dueDate);

    const checkBoxDiv = document.createElement('div');
    checkBoxDiv.classList.add('check-box-div');
    main.appendChild(checkBoxDiv);

    const checkBoxLabel = document.createElement('label');
    checkBoxLabel.for = 'checkBox';
    checkBoxLabel.textContent = 'Done: ';
    checkBoxDiv.appendChild(checkBoxLabel);

    const checkBox = document.createElement('input');
    checkBox.name = 'checkBox';
    checkBox.setAttribute('type', 'checkBox');
    checkBoxDiv.appendChild(checkBox);

    // Append data to fields if data is given to the function
    if (data) {
        name.value = data[0];
        description.value = data[1];
        priority.value = data[2];

        let d = new Date(data[3]);
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
        dueDate.value = d.toISOString().slice(0, 16);

        checkBox.checked = data[4];
    }

    const actionButtons = document.createElement('div');
    actionButtons.classList.add('form-action-buttons-div');
    main.appendChild(actionButtons);

    const leftActionButton = document.createElement('button');
    leftActionButton.classList.add('form-action-buttons');
    leftActionButton.textContent = buttonName;
    leftActionButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value.length > 0 && description.value.length > 0) {
            const values = [name.value, description.value, priority.value, parseISO(dueDate.value), checkBox.checked];
            formAction(...values);
            e.target.parentNode.parentNode.remove();
            if (cb) cb();
        }
        else {
            const alertString = 'Empty required value(s): ' + (name.value.length === 0 ? '\n- Name' : '') + (description.value.length === 0 ? '\n- Description' : '');
            alert(alertString);
        }
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