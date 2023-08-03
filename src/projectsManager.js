import todoList from "./todoList";
import { parseISO } from "date-fns";

export default function projectsManager() {
    this.projs = [];
};

projectsManager.prototype.getProjects = function () { return this.projs; };
projectsManager.prototype.getProjectAt = function (index) { return this.projs[index]; };
projectsManager.prototype.getLength = function () { return this.projs.length; };
projectsManager.prototype.addProject = function (project) { this.projs.push(project); };
projectsManager.prototype.removeProjectAt = function (index) { this.projs.splice(index, 1); };
projectsManager.prototype.replaceProject = function (project, index) { this.projs[index] = project; };

// From https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
// Checks to see if storage is available
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

projectsManager.prototype.saveToLocalStorage = function () {
    if (storageAvailable("localStorage")) {
        const data = this.projs;
        localStorage.setItem('data', JSON.stringify(data));
    }
};

projectsManager.prototype.loadFromLocalStorage = function () {
    if (storageAvailable("localStorage")) {
        const data = JSON.parse(localStorage.getItem('data'));
        if (data) {
            for (let i = 0; i < data.length; i++) {
                const tdL = new todoList(data[i]['name']);
                for (let j = 0; j < data[i]['data'].length; j++) {
                    const item = data[i]['data'][j]['item'];
                    if (item[5] !== 1)
                        tdL.appendTodoItem(item[0], item[1], item[2], parseISO(item[3]), item[4], item[5]);
                }
                this.addProject(tdL);
            }
        }
    }
};