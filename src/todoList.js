import todoItem from "./todoItem";

export default function todoList(name) {
    this.name = name || "";
    this.data = [];
};

todoList.prototype.getData = function () { this.clean(); return this.data; };
todoList.prototype.getLastItem = function () { return this.data[this.data.length - 1]; };
todoList.prototype.getName = function () { return this.name; };
todoList.prototype.appendItem = function (item) { this.data.push(item); };
todoList.prototype.appendTodoItem = function (item) { this.data.push(new todoItem(...item)); };
todoList.prototype.removeItemAt = function (index) { this.data.splice(index, 1); };
todoList.prototype.clean = function () {
    for (let i = this.data.length - 1; i >= 0; i--) {
        if (this.data[i].item[5] === 1) {
            this.removeItemAt(i);
        }
    }
    return this.data;
}