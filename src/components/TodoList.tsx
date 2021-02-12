import React from "react";
import List from "@material-ui/core/List";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Task } from "../Types";
import TodoItem from "./TodoItem";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: "auto",
      height: "500px",
      overflow: "hidden",
      overflowY: "auto",
    },
  })
);

type PROPS = {
  tasks: Task[];
};

const TodoList: React.FC<PROPS> = ({ tasks }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>タスク</p>

      {tasks.length <= 0 ? (
        "登録なし"
      ) : (
        <List component="nav" aria-label="secondary mailbox folders">
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} />
          ))}
        </List>
      )}
    </div>
  );
};

export default TodoList;
