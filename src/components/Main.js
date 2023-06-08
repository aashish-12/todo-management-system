import classes from "./Main.module.css";
import Button from "./UI/Button";
import React, { useState } from "react";
import CreateTask from "./CreateTask";

const Main = (props) => {
  const [addTask, setAddTask] = useState(false);
  const addNewTask = (add) => {
    const newTask = {
      ...add, id: Math.random().toString(),
      
    }
    props.onAddNew(newTask);
    setAddTask(false);
  };
  const createTaskHandler = () => {
    setAddTask(true);
  };
  const stopAdding =()=>{
    setAddTask(false)
  }
  

  return (
    <>
      <section>
        {<Button onClick={createTaskHandler}>Create Task</Button>}
      </section>
      <section className={classes.main}>
        { props.loginValid  && addTask && <CreateTask  onAdd={addNewTask} onCancel={stopAdding}/>}
        {/* {addTask && !props.loginValid && <Button onClick={createTaskHandler}>Create Task</Button>} */}
      </section>
    </>
  );
};

export default Main;
