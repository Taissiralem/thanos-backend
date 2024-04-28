export var tasks = [
  {
    id: "1",
    title: "task 1",
    desc: "lorem ipsum",
    checked: false,
  },
  {
    id: "2",
    title: "task 2",
    desc: "lorem ipsum",
    checked: false,
  },
];

export const getAllTasks = (req, res) => {
  res.json(tasks);
};

export const addTask = (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "id is required" });
  }
  console.log(req);
  tasks.push(req.body);
  res.json({ message: req.body });
};

export const deleteTask = (req, res) => {
  tasks = tasks.filter((elem) => elem.id !== req.body.id);
  res.json({ message: "task deleted" });
};

export const putTask = (req, res) => {
  var foundtasks = tasks.find((elem) => elem.id === req.body.id);
  foundtasks.title = req.body.title;
  foundtasks.desc = req.body.desc;
  foundtasks.checked = req.body.checked;
  res.json({ message: "task updated" });
};
