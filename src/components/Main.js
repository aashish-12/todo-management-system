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
        {!addTask && <Button onClick={createTaskHandler}>Create Task</Button>}
      </section>
      <section className={classes.main}>
        {addTask && <CreateTask  onAdd={addNewTask} onCancel={stopAdding}/>}
      </section>
    </>
  );
};

export default Main;
