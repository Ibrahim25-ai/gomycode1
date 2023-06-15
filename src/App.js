import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask, editTask } from './Components/js/actions/actions';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTask = () => {
    if (newTaskDescription.trim() !== '') {
      const newTask = {
        id: Date.now(),
        description: newTaskDescription,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setNewTaskDescription('');
    }
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleEditTask = (taskId, newDescription) => {
    dispatch(editTask(taskId, newDescription));
  };

  const filteredTasks = () => {
    if (filter === 'done') {
      return tasks.filter((task) => task.isDone);
    } else if (filter === 'notDone') {
      return tasks.filter((task) => !task.isDone);
    } else {
      return tasks;
    }
  };

  return (
    <div>
      <h1>ToDo Application</h1>
      <input
        type="text"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <div>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="notDone">Not Done</option>
        </select>
      </div>

      <ul>
        {filteredTasks().map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => handleToggleTask(task.id)}
            />
            {task.isDone ? <del>{task.description}</del> : task.description}
            <button onClick={() => handleEditTask(task.id, prompt('Enter new task description'))}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
