import { combineReducers } from 'redux';

import NAMES from '../ActionNames';

//changes userInput value in the store state
const newActivityReducer = (newActivity = null, action) => {
	switch (action.type) {
		case NAMES.SAVE_NEW_ACTIVITY:
			return action.payload;
		default:
			return newActivity;
	}
};

//adds and deletes item to/from the todo list
const toDoListReducer = (state = [], action) => {
	switch (action.type) {
		case NAMES.DELETE_ACTIVITY:
			// even though the item is deleted from backend, the state is not changed
			//so we can use filter to remove the ite,
			//which in turn removes item from the state list
			return state.filter((item) => item._id !== action.payload);

		case NAMES.ADD_NEW_ACTIVITY_TO_LIST:
			return [ ...state, action.payload ];

		case NAMES.FETCH_TODO_LIST:
			return [ ...state, ...action.payload ];

		default:
			return state;
	}
};

export default combineReducers({
	newActivity: newActivityReducer,
	ToDoList: toDoListReducer
});

// if both activity have same name, last one is deleted
