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
  //   let content;
  //   useEffect(() => {
  //     // setAddTask(false);
  //     console.log(props.tasks);
  //     content = props.tasks.map((task) => {
  //         return (
  //           <IndividualTask
  //             title={task.title}
  //             description={task.description}
  //             due={task.due_date}
  //           />
  //         );
  //       })
  //   }, [props.tasks]);
  return (
    <div>
      <Button onClick={createTaskHandler}>Create Task</Button>
      <div className={classes.main}>
        {addTask && (
          <>
            <CreateTask data={props.tasks} />
            {props.tasks.map((task) => {
              return (
                <IndividualTask
                  title={task.title}
                  description={task.description}
                  due={task.due_date}
                />
              );
            })}
          </>
        )}
        {!addTask &&
          props.tasks.map((task) => {
            return (
              <IndividualTask
                title={task.title}
                description={task.description}
                due={task.due_date}
                key={task.key}
              />
            );
          })}
        {/* {content} */}
      </div>
    </div>
  );
};

export default Main;
