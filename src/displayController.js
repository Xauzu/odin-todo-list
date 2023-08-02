import todoItem from './todoItem'
import projectsManager from './projectsManager';

export default function displayController(projectsManager, display, projectTitle, todoContent) {
    this.projectsManager = projectsManager;
    this.display = display;
    this.projectTitle = projectTitle;
    this.todoContent = todoContent;
    this.currentDisplay;
};

displayController.prototype.setup = function () {
    this.display = document.querySelector('#content');

    this.projectTitle = document.querySelector('#project-title');
    if (!this.projectTitle) {
        this.projectTitle = document.createElement('div');
        this.projectTitle.id = 'project-title';

        let projectText = document.createElement('div');
        projectText.id = 'project-text';
        this.projectTitle.appendChild(projectText);

        let projectSelection = document.createElement('select');
        projectSelection.id = 'project-selection';
        projectSelection.classList.add('hide');
        projectSelection.addEventListener('change', (e) => {
            const index = e.target.selectedIndex;
            this.loadProject(this.projectsManager.getProjects()[index]);
        });
        this.projectTitle.appendChild(projectSelection);

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
}
displayController.prototype.changeProjectName = function (title) { document.querySelector('#project-text').textContent = title; };
displayController.prototype.clearContent = function () {
    this.todoContent.innerHTML = "";
}
displayController.prototype.loadProject = function (project) {
    this.changeProjectName(project['name']);
    this.currentDisplay = project;
    const data = project.getData();

    // Clear and populate content
    this.clearContent();
    for (let i = 0; i < data.length; i++)
        this.todoContent.appendChild(data[i].createItemDisplay(i));
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