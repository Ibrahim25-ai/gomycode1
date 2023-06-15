// Task.js
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "./js/actions/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = (e) => {
    const newDescription = e.target.value;
    dispatch(editTask(task.id, newDescription));
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <input type="text" value={task.description} onChange={handleEdit} />
    </div>
  );
};

export default Task;
