import NAMES from '../ActionNames';
import todoServer from '../backendApi/ToDoServer';

// post activity to the backend server and receives new todo as data and dispatches action respectively
export const addActivityToList = (newActivity) => (disptach) => {
	todoServer.post('/', { todo: newActivity }).then((res) => {
		disptach({ type: NAMES.ADD_NEW_ACTIVITY_TO_LIST, payload: res.data });
	});
};

// fetches todo list from backend
export const fetchToDoList = (newActivity) => (disptach) => {
	todoServer.get('/', { todo: newActivity }).then((res) => {
		disptach({ type: NAMES.FETCH_TODO_LIST, payload: res.data });
	});
};

export const deleteActivity = (todoId) => (disptach) => {
	todoServer.delete('/', { data: { todoId } }).then((res) => {
		disptach({ type: NAMES.DELETE_ACTIVITY, payload: res.data });
	});
};
