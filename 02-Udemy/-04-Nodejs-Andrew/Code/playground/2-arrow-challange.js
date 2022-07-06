const tasks = [
  { text: "Shopping", completed: false },
  { text: "Cleaning", completed: true },
  { text: "exercizeing", completed: false },
];

const getTasksToDo = (tasks) => {
  return tasks.filter((task) => task.completed === true);
};
const completedTasks = getTasksToDo(tasks);
console.log(completedTasks);
