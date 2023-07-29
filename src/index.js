import './style.css'
import displayController from './displayController'
import projectsManager from './projectsManager'
import todoList from './todoList';
import todoItem from './todoItem';
import { format } from 'date-fns';

const test = function () {
    // Setup
    const pm = new projectsManager();
    const dc = new displayController();
    dc.setup();

    const tdL = new todoList("test");
    console.log("TodoList Name: [" + tdL.getName() + "]");

    for (let i = 0; i < 10; i++) {
        // name, description, priority, dueDate, complete
        let newItem = new todoItem("Item " + i,
            "Description " + i,
            i % 3,
            new Date(2023, 7, 28, i),
            Boolean(i % 2));
        tdL.appendItem(newItem);
    }

    //Test
    dc.loadProject(tdL);

}();