import edit from './edit.png';
import del from './delete.png';
import { compareAsc, parseISO, format } from 'date-fns';

export default function todoItem(name, description, priority, dueDate, complete) {
    // String String int(0->2) Date boolean delete?
    this.item = [name, description, priority, dueDate, complete, 0];
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
// <done:checkBox> <title> - <description:huh> <dueDate> <edit btn:huh> <delete btn:huh>, <priority:color>
//
//  priority, 0 = gray, 1 = orange, 2 = red
//
//  * huh = hidden until hover
todoItem.prototype.createItemDisplay = function (id) {
    // Parent Node
    const displayItem = document.createElement('div');
    displayItem.classList.add('todoItem');

    // Checkbox
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkBox');
    checkBox.checked = this.isComplete();
    checkBox.addEventListener('change', () => {
        this.setComplete(checkBox.checked);
    });
    displayItem.appendChild(checkBox);

    // Priority
    const priority = this.getPriority();
    let classText;
    switch (priority) {
        case 1:
            classText = "pMed";
            break;
        case 2:
            classText = "pHigh";
            break;
        case 0:
        default:
            classText = "pLow";
    }
    displayItem.classList.add(classText);

    // Name
    const name = document.createElement('div');
    name.textContent = this.getName();
    displayItem.appendChild(name);

    // Description, Hidden until hover
    const description = document.createElement('div');
    description.textContent = this.getDescription();
    description.classList.add('description', 'hide-opacity2');
    displayItem.appendChild(description);

    // Due Date
    if ('showPicker' in HTMLInputElement.prototype) {
        // console.log(new Date().toISOString(), this.getDueDate(), "dateDiff: ", dateDiff);

        const dueDate = document.createElement('div');
        dueDate.title = format(this.getDueDate(), "M/d/yy, h:mm aaaaa'm'");

        dueDate.textContent = calcTimeDisplay(this.getDueDate());
        if (dueDate.textContent === 'Passed')
            dueDate.setAttribute('color', 'red');

        displayItem.appendChild(dueDate);
    }
    else {
        const dueDate = document.createElement('input');
        dueDate.setAttribute('type', 'datetime-local');
        dueDate.value = this.getDueDate().toISOString().slice(0, 16);
        dueDate.addEventListener('change', (e) => {
            this.setDueDate(parseISO(dueDate.value + "Z"));
        });
        displayItem.appendChild(dueDate);
    }

    // Edit Button, Hidden until hover
    const editButton = document.createElement('button');
    editButton.classList.add('todoButton', 'hide-opacity');
    let editImg = new Image();
    editImg.src = edit;
    editImg.classList.add('itemImg');
    editButton.appendChild(editImg);
    displayItem.appendChild(editButton);

    // Delete Button, Hidden until hover
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todoButton', 'hide-opacity');
    let deleteImg = new Image();
    deleteImg.src = del;
    deleteImg.classList.add('itemImg');
    deleteButton.appendChild(deleteImg);
    displayItem.appendChild(deleteButton);
    deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.classList.add('hide');
        this.delete();
    });

    displayItem.addEventListener('mouseenter', () => {
        description.classList.remove('hide-opacity2');
        editButton.classList.remove('hide-opacity');
        deleteButton.classList.remove('hide-opacity');
    });
    displayItem.addEventListener('mouseleave', () => {
        description.classList.add('hide-opacity2');
        editButton.classList.add('hide-opacity');
        deleteButton.classList.add('hide-opacity');
    });

    return displayItem;
};