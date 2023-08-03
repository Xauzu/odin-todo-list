import todoItem, { createAddDisplay } from './todoItem'
import projectsManager from './projectsManager';
import edit from './edit.png';
import del from './delete.png';

export default function displayController(projectsManager, display, projectTitle, todoContent, postContent) {
    this.projectsManager = projectsManager;
    this.display = display;
    this.projectTitle = projectTitle;
    this.todoContent = todoContent;
    this.postContent = postContent;
    this.currentDisplay;
};

displayController.prototype.setup = function () {
    this.display = document.querySelector('#content');

    this.projectTitle = document.querySelector('#project-title');
    if (!this.projectTitle) {
        this.projectTitle = document.createElement('div');
        this.projectTitle.id = 'project-title';

        const projectText = document.createElement('div');
        projectText.id = 'project-text';
        this.projectTitle.appendChild(projectText);

        const projectSelection = document.createElement('select');
        projectSelection.id = 'project-selection';
        projectSelection.classList.add('hide');
        projectSelection.addEventListener('change', (e) => {
            const index = e.target.selectedIndex;
            this.loadProject(this.projectsManager.getProjects()[index]);
        });
        this.projectTitle.appendChild(projectSelection);

        const projectButtonsDiv = document.createElement('div');
        projectButtonsDiv.id = 'project-buttons-div';

        const editProjectButton = document.createElement('button');
        editProjectButton.id = 'edit-project-button';
        editProjectButton.classList.add('project-button');
        const editImg = new Image();
        editImg.draggable = false;
        editImg.src = edit;
        editImg.classList.add('item-img');
        editProjectButton.appendChild(editImg);
        projectButtonsDiv.appendChild(editProjectButton);

        const delProjectButton = document.createElement('button');
        delProjectButton.id = 'del-project-button';
        delProjectButton.classList.add('project-button');
        const delImg = new Image();
        delImg.draggable = false;
        delImg.src = del;
        delImg.classList.add('item-img');
        delProjectButton.appendChild(delImg);
        projectButtonsDiv.appendChild(delProjectButton);

        const addProjectButton = document.createElement('button');
        addProjectButton.id = 'add-project-button';
        addProjectButton.classList.add('project-button');
        addProjectButton.textContent = '+';
        projectButtonsDiv.appendChild(addProjectButton);

        this.projectTitle.appendChild(projectButtonsDiv);

        this.projectTitle.addEventListener('mouseenter', () => {
            const text = document.querySelector('#project-text');
            text.classList.add('hide');
            const selection = document.querySelector('#project-selection');
            selection.classList.remove('hide');
        });
        this.projectTitle.addEventListener('mouseleave', () => {
            const text = document.querySelector('#project-text');
            text.classList.remove('hide');
            const selection = document.querySelector('#project-selection');
            selection.classList.add('hide');
        });

        this.display.appendChild(this.projectTitle);
    }

    this.todoContent = document.querySelector('#todo-content');
    if (!this.todoContent) {
        this.todoContent = document.createElement('div');
        this.todoContent.id = 'todo-content';
        this.display.appendChild(this.todoContent);
    }

    this.postContent = document.querySelector('#postcontent');
    if (!this.postContent) {
        this.postContent = document.createElement('div');
        this.postContent.id = 'postcontent';
        this.display.appendChild(this.postContent);
    }
}
displayController.prototype.changeProjectName = function (title) { document.querySelector('#project-text').textContent = title; };
displayController.prototype.clearContent = function () {
    this.todoContent.innerHTML = "";
    this.postContent.innerHTML = "";
}
displayController.prototype.loadProject = function (project) {
    this.changeProjectName(project['name']);
    this.currentDisplay = project;
    const data = project.getData();

    // Clear and populate content
    this.clearContent();
    for (let i = 0; i < data.length; i++)
        this.todoContent.appendChild(data[i].createItemDisplay(i));
    this.postContent.appendChild(createAddDisplay((inputData) => {
        project.appendTodoItem(inputData);
        this.todoContent.appendChild(project.getLastItem().createItemDisplay(data.length - 1));
    }));
};
displayController.prototype.loadContent = function (content) {
    // Populate content
    this.todoContent.appendChild(content);
};
displayController.prototype.loadProjectList = function (list) {
    const selection = document.querySelector('#project-selection');

    // Clear and populate list
    selection.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        const selectionItem = document.createElement('option');
        selectionItem.textContent = list[i]['name'];
        selection.appendChild(selectionItem);
    }
};