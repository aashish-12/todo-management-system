import classes from "./IndividualTask.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

const Task = (props) => {
  return (
    <Card>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className={classes.div}>
        <p>Due Date: {props.due}</p>
      </div>
      <div className={`${classes.div} ${classes.button}`}>
        <Button>Delete</Button>
      </div>
    </Card>
  );
};

export default Task;
