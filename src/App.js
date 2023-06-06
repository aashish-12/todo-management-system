import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Signup from './components/Signup';
import Login from './components/Login';
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
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  let content = (
    <>
      <Header loginHandler={loginHandler} signupHandler={signUpHandler}></Header>
      <Main tasks={tasks}></Main>
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
  if (signUp) {
    content = <Signup />;
  }
  if (login) {
    content = <Login />;
  }
  return <React.Fragment>{content}</React.Fragment>;
}

export default App;
