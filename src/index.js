import './style.css'
import displayController from './displayController'
import projectsManager from './projectsManager'
import todoList from './todoList';
import todoItem from './todoItem';
import { format } from 'date-fns';

const test = function () {
    // Setup
    const pm = new projectsManager();
    const dc = new displayController(pm);
    dc.setup();

    const tdL = new todoList("test");
    pm.addProject(tdL);
    console.log("TodoList Name: [" + tdL.getName() + "]");

    for (let i = 0; i < 10; i++) {
        // name, description, priority, dueDate, complete
        const today = new Date();

        //console.log("Adding: [" + format(new Date(today.getFullYear(), today.getMonth(), today.getDay(), i), "M/d/yy, h:mm aaaaa'm'") + "]");
        console.log("Today is: ", (today.getMonth() + 1), "/", today.getDate(), "/", today.getFullYear());

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

}();

const main = function () {

};