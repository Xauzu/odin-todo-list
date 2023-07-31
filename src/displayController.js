import todoItem from './todoItem'
import projectsManager from './projectsManager';

export default function displayController(projectsManager, display, projectTitle, todoContent) {
    this.projectsManager = projectsManager;
    this.display = display;
    this.projectTitle = projectTitle;
    this.todoContent = todoContent;
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
displayController.prototype.loadProject = function (project) {
    this.changeProjectName(project['name']);
    const data = project['data'];

    // Clear and populate content
    this.todoContent.innerHTML = "";
    data.forEach(item => {
        this.todoContent.appendChild(item.createItemDisplay());
    });
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