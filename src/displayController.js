import todoItem, { createAddDisplay } from './todoItem'
import todoList, { todoListForm } from './todoList'
import projectsManager from './projectsManager';
import edit from './edit.png';
import del from './delete.png';

export default function displayController(projectsManager, display, projectTitle, todoContent, postContent) {
    this.projectsManager = projectsManager;
    this.display = display;
    this.projectTitle = projectTitle;
    this.todoContent = todoContent;
    this.postContent = postContent;
    this.currentIndex = 0;
};

displayController.prototype.setup = function () {
    this.display = document.querySelector('#content');

    this.projectTitle = document.querySelector('#project-title');
    if (!this.projectTitle) {
        this.projectTitle = document.createElement('div');
        this.projectTitle.id = 'project-title';

        const projectText = document.createElement('div');
        projectText.id = 'project-text';
        projectText.textContent = '<empty>';
        this.projectTitle.appendChild(projectText);

        const projectSelection = document.createElement('select');
        projectSelection.id = 'project-selection';
        projectSelection.classList.add('hide');
        projectSelection.addEventListener('change', (e) => {
            const index = e.target.selectedIndex;
            this.loadProject(this.projectsManager.getProjects()[index], index);
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
        editProjectButton.addEventListener('click', (e) => {
            if (this.projectsManager.getProjects().length > 0 && !document.querySelector('.action-form')) {
                const addProjectForm = todoListForm('Edit List', 'Confirm', (name) => {
                    this.projectsManager.getProjectAt(this.currentIndex).setName(name);
                    this.projectsManager.saveToLocalStorage();
                    this.reloadList();
                }, [this.projectsManager.getProjectAt(this.currentIndex)['name']]);
                e.target.parentNode.parentNode.parentNode.appendChild(addProjectForm);
            }
        });
        projectButtonsDiv.appendChild(editProjectButton);

        const delProjectButton = document.createElement('button');
        delProjectButton.id = 'del-project-button';
        delProjectButton.classList.add('project-button');
        const delImg = new Image();
        delImg.draggable = false;
        delImg.src = del;
        delImg.classList.add('item-img');
        delProjectButton.appendChild(delImg);
        delProjectButton.addEventListener('click', () => {
            if (this.projectsManager && this.currentIndex !== undefined) {
                this.projectsManager.removeProjectAt(this.currentIndex);
                this.projectsManager.saveToLocalStorage();

                this.reloadList();
                this.clearContent();

                if (this.projectsManager.getProjects().length > 0) {
                    this.loadProject(this.projectsManager.getProjectAt(0), 0);
                }
                else this.changeProjectName('<empty>');
            }
        });
        projectButtonsDiv.appendChild(delProjectButton);


        const addProjectButton = document.createElement('button');
        addProjectButton.id = 'add-project-button';
        addProjectButton.classList.add('project-button');
        addProjectButton.textContent = '+';

        addProjectButton.addEventListener('click', (e) => {
            if (!document.querySelector('.action-form')) {
                const addItemForm = todoListForm('Add Todo List', 'Add', (name) => {
                    this.projectsManager.addProject(new todoList(name));
                    this.projectsManager.saveToLocalStorage();
                    const index = this.projectsManager.getLength() - 1;
                    // Reload selection list and select last one
                    this.reloadList();
                    projectSelection.selectedIndex = projectSelection.length - 1;
                    this.loadProject(this.projectsManager.getProjectAt(index), index);

                });
                addItemForm.classList.add('add-form');
                e.target.parentNode.parentNode.parentNode.appendChild(addItemForm);
            }
        });
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

    this.projectsManager.loadFromLocalStorage();
    this.loadProjectList(this.projectsManager.getProjects());
}
displayController.prototype.changeProjectName = function (title) { document.querySelector('#project-text').textContent = title; };
displayController.prototype.clearContent = function () {
    this.todoContent.innerHTML = "";
    this.postContent.innerHTML = "";
}
displayController.prototype.loadProject = function (project, index) {
    this.changeProjectName(project['name']);
    if (index !== undefined) this.currentIndex = index;
    const data = project.getData();

    // Clear and populate content
    this.clearContent();
    for (let i = 0; i < data.length; i++) {
        this.todoContent.appendChild(data[i].createItemDisplay(i, () => {
            this.projectsManager.saveToLocalStorage();
        }));
    }
    this.postContent.appendChild(createAddDisplay((...inputData) => {
        project.appendTodoItem(...inputData);
        this.projectsManager.saveToLocalStorage();
        this.todoContent.appendChild(project.getLastItem().createItemDisplay(data.length - 1, () => {
            this.projectsManager.saveToLocalStorage();
        }));
    }));
};
displayController.prototype.loadContent = function (content) {
    // Populate content
    this.todoContent.appendChild(content);
};
displayController.prototype.loadProjectList = function (list) {
    const selection = document.querySelector('#project-selection');

    if (list.length > 0) {
        this.loadProject(list[0]);
    }

    // Clear and populate list
    selection.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        const selectionItem = document.createElement('option');
        selectionItem.textContent = list[i]['name'];
        selection.appendChild(selectionItem);
    }
};
displayController.prototype.reloadList = function () {
    if (projectsManager) this.loadProjectList(this.projectsManager.getProjects());
}