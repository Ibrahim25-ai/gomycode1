// reducers.js
import { combineReducers } from 'redux';
const initialState = {
    tasks: [],
  };
  
  const tasksReducer = (state = initialState.tasks, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, action.payload];
      case 'TOGGLE_TASK':
        return state.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        );
      case 'EDIT_TASK':
        return state.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        );
      default:
        return state;
    }
  };
  
  const rootReducer = combineReducers({
    tasks: tasksReducer,
  });
  
  export default rootReducer;
  