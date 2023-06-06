import classes from "./Main.module.css";
import Button from "./UI/Button";
import IndividualTask from "./IndividualTask";
import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask";

const Main = (props) => {
  const [addTask, setAddTask] = useState(false);
  const createTaskHandler = () => {
    setAddTask(true);
  };
  return (
    <div>
      <Button onClick={createTaskHandler}>Create Task</Button>
      <div className={classes.main}>
        {addTask && (
          <>
            <CreateTask data={props.tasks} />
            <ul>
              {props.tasks.map((task) => (
                <IndividualTask
                  title={task.title}
                  description={task.description}
                  due={task.due_date}
                />
              ))}
            </ul>
          </>
        )}
        {!addTask && (
          <ul>
            {props.tasks.map((task) => {
              return (
                <IndividualTask
                  title={task.title}
                  description={task.description}
                  due={task.due_date}
                />
              );
            })}
          </ul>
        )}
        {/* {content} */}
      </div>
    </div>
  );
};

export default Main;
