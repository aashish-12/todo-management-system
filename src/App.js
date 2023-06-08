import React, { useState, useEffect } from "react";
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
  const [onLoginTo, setOnLoginTo] = useState({ loginConfirm: false });
  const [token, setToken] = useState("");
  const [logout, setLogout] = useState(false);

  const addNewTasksHandler = (task) => {
    if (onLoginTo.loginConfirm === true) {
      setTaskList((prevTask) => {
        return [task, ...prevTask];
      });
    }
  };
  const deleteTask = (id) => {
    console.log(id);
    const newList = taskList.filter((task) => task.id !== id);
    if (onLoginTo.loginConfirm === true) {
      setTaskList(newList);
    }
  };
  async function logoutHandler(event) {
    // event.preventDefault();
    try {
      console.log(token);
      const response = await fetch(
        "https://to-do-manage.onrender.com/api/auth/logout",
        {
          method: "POST",
          headers: new Headers({
            Authorization: `Bearer ${token}`,
          }),
        }
      );
      const result = await response.json();
      console.log(result.message);
      if (result.message === "Logged out successfully") {
        setLogout(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  function loginHandler() {
    console.log("login");
    setLogin(true);
  }
  function signUpHandler() {
    console.log("clicked");
    setSignUp(true);
  }
  const loginToMainPage = (logedin) => {
    // event.preventDefault();
    console.log(logedin);
    if (logedin.login === true) {
      setOnLoginTo((prev) => {
        prev.loginConfirm = true;
        return { ...prev };
      });
    }
  };
  const userToken = (tok) => {
    setToken(tok);
  };
  return (
    <React.Fragment>
      {!signUp && !login && (
        <>
          <Header
            loginHandler={loginHandler}
            signupHandler={signUpHandler}
          ></Header>
          <Main onAddNew={addNewTasksHandler} loginValid={false}></Main>
          <TaskList tasks={taskList} deleteId={deleteTask} />
        </>
      )}
      {signUp && !login && <Signup />}
      {login && !onLoginTo.loginConfirm && (
        <Login onLogin={loginToMainPage} token={userToken} />
      )}
      {!logout && onLoginTo.loginConfirm && (
        <>
          <Header
            loginHandler={loginHandler}
            signupHandler={signUpHandler}
            login={onLoginTo.loginConfirm}
            logout={logoutHandler}
          ></Header>
          <Main onAddNew={addNewTasksHandler} loginValid={true}></Main>
          <TaskList tasks={taskList} deleteId={deleteTask} />
        </>
      )}
      {logout && (
        <p
          style={{ textAlign: "center", marginTop: "100px", fontSize: "30px" }}
        >
          Logged out successfully
        </p>
      )}
    </React.Fragment>
  );
}

export default App;
