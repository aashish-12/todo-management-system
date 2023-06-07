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
      title: enteredTitle,
      description: enteredDescription,
      due_date: enteredDate,
      assignee: enteredAssignee,
    };

    props.onAdd(add);
    setEnteredAssignee("");
    setEnteredDate("");
    setEnteredDescription("");
    setEnteredTitle("");
    // content= <></>;
    // console.log(props.data);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={addTaskHandler}>
        <h3>Add Your Task</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
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
        <label htmlFor="assignee">Assignee</label>
        <input
          type="text"
          id="assignee"
          value={enteredAssignee}
          onChange={assigneeChangeHandler}
        ></input>
        <Button>Add Task</Button>
        <Button onClick={props.onCancel}>Cancel</Button>
      </form>
    </Card>
  );
};

export default CreateTask;
