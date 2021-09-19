const Task = require("./task");

class Taskes {
  taskList = {};

  get taskArrayList() {
    const taskArray = [];
    Object.keys(this.taskList).forEach((key) => {
      taskArray.push(this.taskList[key]);
    });

    return taskArray;
  }

  constructor() {
    this.taskList = {};
  }

  createTask(desc = "") {
    const task = new Task(desc);

    this.taskList[task.id] = task;
  }
}

module.exports = Taskes;
