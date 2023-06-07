import classes from "./IndividualTask.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

const IndividualTask = (props) => {
  
  return (
    <li>
      <Card>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {/* <p>Assignee: {props.assignee}</p> */}
        <div className={classes.div}>
          <p>Due Date: {props.date}</p>
        </div>
        <div className={`${classes.div} ${classes.button}`}>
          <Button className={classes.button} onClick={props.deleteHandler} >
            Delete
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default IndividualTask;
