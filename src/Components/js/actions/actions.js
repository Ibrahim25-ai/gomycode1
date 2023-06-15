// actions.js
export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  };
  
  export const toggleTask = (taskId) => {
    return {
      type: 'TOGGLE_TASK',
      payload: taskId,
    };
  };
  
  export const editTask = (taskId, newDescription) => {
    return {
      type: 'EDIT_TASK',
      payload: { id: taskId, description: newDescription },
    };
  };
  