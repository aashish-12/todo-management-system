import classes from "./Main.module.css";
import Button from "./UI/Button";
import IndividualTask from "./IndividualTask";
import React, { useState } from "react";
import CreateTask from "./CreateTask";

const tasks = [
  {
    title: "ToDo Management System",
    description:
      "It is a software application designed to help users organize and manage their tasks effectively",
    due_date: "06-05-2023",
    assignee: "developer",
    key: 12,
  },
];
const Main = (props) => {
  const [addTask, setAddTask] = useState(false);
  let content = tasks.map((task) => {
    return (
      <IndividualTask
        title={task.title}
        description={task.description}
        due={task.due_date}
      />
    );
  });
  const createTaskHandler = () => {
    setAddTask(true);
  };
  if (addTask) {
    content = <CreateTask data={tasks} />;
    {
      tasks.map((task) => {
        return (
          <IndividualTask
            title={task.title}
            description={task.description}
            due={task.due_date}
          />
        );
      });
    }
  }
  return (
    <div>
      <Button onClick={createTaskHandler}>Create Task</Button>
      <div className={classes.main}>{content}</div>
    </div>
  );
};

export default Main;
