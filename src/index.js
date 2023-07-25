import './style.css'
import displayController from './displayController'
import projectsManager from './projectsManager'
import todoList from './todoList';

const test = function () {
    const pm = new projectsManager();
    pm.addProject({ "name": "projects manager test", "data": [{ "title": "", "description": "", "dueDate": "", "priority": "", "done": false }] });
    console.log(pm);
    console.log(pm.getProjects());
    // pm.removeProjectAt(0);
    // console.log(pm.getProjects());

    const dc = new displayController();
    dc.setup();
    dc.changeProjectName("test");
    dc.changeProject(pm.getProjectAt(0));
}();