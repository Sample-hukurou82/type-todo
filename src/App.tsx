import React, { useState } from "react";
import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./App.css";
import TodoList from "./components/TodoList";
import { Task } from "./Types";
import TodoInput from "./components/TodoInput";

const initalState: Task[] = [
  {
    id: 1,
    title: "ハロー",
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initalState);

  return (
    <div className="App">
      <TodoInput tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
