import IndividualTask from "./IndividualTask";

const TaskList = (props) => {
  if (props.tasks.length === 0) {
    return <h2 style={{textAlign : "center"}}>Found no Task.</h2>;
  }
  const deleteTask = (id) => {
    // console.log(id);
    props.deleteId(id);
  };
  return (
    <ul>
      {props.tasks.map((task, index) => (
        <IndividualTask
          key={index}
          id={task.id}
          title={task.title}
          description={task.description}
          date={task.due_date}
          assignee={task.assignee}
          deleteHandler={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
