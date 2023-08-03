import './style.css'
import displayController from './displayController'
import projectsManager from './projectsManager'
import todoList from './todoList';

// Setup
const pm = new projectsManager();
const dc = new displayController(pm);
dc.setup();

function newProject(name) {
    const proj = new todoList(name);
    pm.addProject(proj);

    // Reload project list after adding new project
    dc.loadProjectList(pm.getProjects());
}