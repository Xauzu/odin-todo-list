import projectsManager from "./projectsManager";

export default function displayController(display, projectText, todoContent) {
    this.display = display;
    this.projectText = projectText;
    this.todoContent = todoContent;
};

displayController.prototype.setup = function () {
    this.display = document.querySelector('#content');

    this.projectText = document.querySelector('#project-text');
    if (!this.projectText) {
        this.projectText = document.createElement('div');
        this.projectText.id = 'project-text';
        this.display.appendChild(this.projectText);
    }

    this.todoContent = document.querySelector('#todo-content');
    if (!this.todoContent) {
        this.todoContent = document.createElement('div');
        this.todoContent.id = 'todo-content';
        this.display.appendChild(this.todoContent);
    }
}
displayController.prototype.changeProjectName = function (title) { this.display.textContent = title; };
displayController.prototype.changeProject = function (project) {
    this.changeProjectName(project["name"]);
    // Todo: Other code here 
};