import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
const tasks = [
  {
    key: 12,
    title: "ToDo Management System",
    description:
      "It is a software application designed to help users organize and manage their tasks effectively",
    due_date: "06-05-2023",
    assignee: "developer",
  },
  {
    key: 11,
    title: "Hotel Management System",
    description:
      "It is a software application designed to help users organize and manage their hotel site effectively",
    due_date: "06-05-2023",
    assignee: "software",
  },
  {
    key: 10,
    title: "DCRUST",
    description:
      "It is a software application designed to help users organize and manage their tasks effectively.....",
    due_date: "06-05-2023",
    assignee: "student",
  },
]; //tasks of particular user
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Main tasks={tasks}></Main>
    </React.Fragment>
  );
}

export default App;
