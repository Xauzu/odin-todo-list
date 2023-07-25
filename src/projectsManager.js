export default function projectsManager() {
    this.projs = [];
};

projectsManager.prototype.getProjects = function () { return this.projs; };
projectsManager.prototype.getProjectAt = function (index) { return this.projs[index]; };
projectsManager.prototype.getLength = function () { return this.projs.length; };
projectsManager.prototype.addProject = function (project) { this.projs.push(project); };
projectsManager.prototype.removeProjectAt = function (index) { this.projs.splice(index, 1); };
projectsManager.prototype.replaceProject = function (project, index) { this.projs[index] = project; };