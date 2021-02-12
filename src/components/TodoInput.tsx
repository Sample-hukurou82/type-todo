import React, { useState } from "react";
import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Task } from "../Types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

type PROPS = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TodoInput: React.FC<PROPS> = ({ tasks, setTasks }) => {
  const classes = useStyles();

  const [inputTitle, setInputTitle] = useState("");
  const [count, setCount] = useState(tasks.length + 1);

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setCount(count + 1);
    const newTask: Task = {
      id: count,
      title: inputTitle,
    };
    setTasks([newTask, ...tasks]);
    setInputTitle("");
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="new task"
          value={inputTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputTitle(e.target.value)
          }
        />
      </form>
      <Button
        size="small"
        variant="contained"
        color="primary"
        disabled={!inputTitle}
        onClick={handleSubmit}
      >
        登録
      </Button>
    </>
  );
};

export default TodoInput;
