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
