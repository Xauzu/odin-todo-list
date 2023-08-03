import './style.css'
import displayController from './displayController'
import projectsManager from './projectsManager'
import todoList from './todoList';
import todoItem, { todoItemForm } from './todoItem';
import { format } from 'date-fns';

// Setup
const pm = new projectsManager();
const dc = new displayController(pm);
dc.setup();

const testFunc = function () {
    const tdL = new todoList("test");
    pm.addProject(tdL);

    for (let i = 0; i < 10; i++) {
        // name, description, priority, dueDate, complete
        const today = new Date();

        // console.log("Adding: [" + format(new Date(today.getFullYear(), today.getMonth(), today.getDay(), i), "M/d/yy, h:mm aaaaa'm'") + "]");
        // console.log("Today is: ", (today.getMonth() + 1), "/", today.getDate(), "/", today.getFullYear());

        let newItem = new todoItem("Item " + i,
            "Description " + i,
            i % 3,
            new Date(today.getFullYear(), today.getMonth(), today.getDate(), i),
            Boolean(i % 2));
        tdL.appendItem(newItem);
    }

    tdL['data'][2].setDescription('This is suppose to be a very long description mainly for testing to see how the text wraps');

    //Test
    dc.loadProject(tdL);


    const tdL2 = new todoList("test 2");
    pm.addProject(tdL2);

    dc.loadProjectList(pm.getProjects());

    // Test form
    // dc.loadContent(todoItemForm('Adding a new item', 'Add'));
};

const main = function () {

};

function newProject(name) {
    const proj = new todoList(name);
    pm.addProject(proj);

    // Reload project list after adding new project
    dc.loadProjectList(pm.getProjects());
}

const test = 0;

if (test)
    testFunc();
else
    main();