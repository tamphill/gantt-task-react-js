export function isKeyboardEvent(event) {
    return event.key !== undefined;
}
export function isMouseEvent(event) {
    return event.clientX !== undefined;
}
export function isBarTask(task) {
    return task.x1 !== undefined;
}
export function removeHiddenTasks(tasks) {
    const groupedTasks = tasks.filter(t => t.hideChildren && t.type === "project");
    if (groupedTasks.length > 0) {
        for (let i = 0; groupedTasks.length > i; i++) {
            const groupedTask = groupedTasks[i];
            const children = getChildren(tasks, groupedTask);
            tasks = tasks.filter(t => children.indexOf(t) === -1);
        }
    }
    return tasks;
}
function getChildren(taskList, task) {
    let tasks = [];
    if (task.type !== "project") {
        tasks = taskList.filter(t => t.dependencies && t.dependencies.indexOf(task.id) !== -1);
    }
    else {
        tasks = taskList.filter(t => t.project && t.project === task.id);
    }
    var taskChildren = [];
    tasks.forEach(t => {
        taskChildren.push(...getChildren(taskList, t));
    });
    tasks = tasks.concat(tasks, taskChildren);
    return tasks;
}
export const sortTasks = (taskA, taskB) => {
    const orderA = taskA.displayOrder || Number.MAX_VALUE;
    const orderB = taskB.displayOrder || Number.MAX_VALUE;
    if (orderA > orderB) {
        return 1;
    }
    else if (orderA < orderB) {
        return -1;
    }
    else {
        return 0;
    }
};