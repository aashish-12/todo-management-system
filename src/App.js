import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import TaskList from "./components/TaskList";
let tasks = [
  {
    id: "12",
    title: "ToDo Management System",
    description:
      "It is a software application designed to help users organize and manage their tasks effectively",
    due_date: "06-05-2023",
    assignee: "developer",
  },
  {
    id: "11",
    title: "Hotel Management System",
    description:
      "It is a software application designed to help users organize and manage their hotel site effectively",
    due_date: "06-05-2023",
    assignee: "software",
  },
  {
    id: "10",
    title: "DCRUST",
    description:
      "It is a software application designed to help users organize and manage their tasks effectively.....",
    due_date: "06-05-2023",
    assignee: "student",
  },
]; //tasks of particular user
function App() {
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [taskList, setTaskList] = useState(tasks);
  const [onLoginTo, setOnLoginTo] = useState(false);

  const addNewTasksHandler = (task) => {
    setTaskList((prevTask) => {
      return [task, ...prevTask];
    });
  };
  const deleteTask = (id) => {
    console.log(id);
    const newList = taskList.filter((task) => task.id !== id);
    // console.log(newList);
    setTaskList(newList);
  };
  let content = (
    <>
      <Header
        loginHandler={loginHandler}
        signupHandler={signUpHandler}
        login={onLoginTo}
      ></Header>
      <Main onAddNew={addNewTasksHandler}></Main>
      <TaskList tasks={taskList} deleteId={deleteTask} />
    </>
  );
  function loginHandler() {
    console.log("login");
    setLogin(true);
  }
  function signUpHandler() {
    console.log("clicked");
    setSignUp(true);
  }
  const loginToMainPage = (e) => {
    // e.preventDefault();
    setOnLoginTo(true);
    console.log("12334");
  };
  if (signUp) {
    content = <Signup />;
  }
  if (login) {
    content = <Login onLogin={loginToMainPage} />;
  }
  return <React.Fragment>{content}</React.Fragment>;
}

export default App;
