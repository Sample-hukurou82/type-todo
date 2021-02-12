import React from "react";
import List from "@material-ui/core/List";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Task } from "../Types";

type PROPS = {
  task: Task;
};

const TodoItem: React.FC<PROPS> = ({ task }) => {
  return (
    <>
      <ListItem button>
        <ListItemText key={task.id} primary={task.title} />
      </ListItem>
    </>
  );
};

export default TodoItem;
