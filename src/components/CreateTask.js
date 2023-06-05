import classes from "./CreateTask.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";
import React, { useState } from "react";

const CreateTask = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAssignee, setEnteredAssignee] = useState("");
  const assigneeChangeHandler = (event) => {
    setEnteredAssignee(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  function addTaskHandler(event) {
    event.preventDefault();
    // content = <></>;
    const add = {
      key: Math.random(),
      title: enteredTitle,
      description: enteredDescription,
      due_date: enteredDate,
      assignee: enteredAssignee,
    };

    props.data.push(add);
    setEnteredAssignee("");
    setEnteredDate("");
    setEnteredDescription("");
    setEnteredTitle("");
    // content= <></>;
    // console.log(props.data);
  }
  return (
    <Card>
      <form className={classes.form}>
        <h3>Add Your Task</h3>
        <label id="title">Title</label>
        <input
          type="text"
          htmlFor="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        ></input>
        <label id="description">Description</label>
        <input
          type="text"
          htmlFor="description"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        ></input>
        <label htmlFor="due">Due Date</label>
        <input
          type="date"
          id="due"
          value={enteredDate}
          onChange={dateChangeHandler}
        ></input>
        <br></br>
        <label id="assignee">Assignee</label>
        <input
          type="text"
          htmlFor="assignee"
          value={enteredAssignee}
          onChange={assigneeChangeHandler}
        ></input>
        <Button onClick={addTaskHandler}>Add Task</Button>
      </form>
    </Card>
  );
};

export default CreateTask;
