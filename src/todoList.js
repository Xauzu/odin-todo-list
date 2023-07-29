export default function todoList(name) {
    this.name = name || "";
    this.data = [];
};

todoList.prototype.getData = function () { return this.data; };
todoList.prototype.getName = function () { return this.name; };
todoList.prototype.appendItem = function (item) { this.data.push(item); };
todoList.prototype.removeItemAt = function (index) { this.data = this.data.splice(index, 1); };