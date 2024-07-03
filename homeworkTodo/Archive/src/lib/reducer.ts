import { ActionTypes, IAction, IState, ITodo } from "./types";

export const reducer = (state:IState, action:IAction) => {
    switch(action.type) {
        case ActionTypes.setTodos:
            return {
                ...state,
                todos: action.payload as ITodo[]
            }
        case ActionTypes.addTodo: 
            return {
                ...state,
                todos: [...state.todos, action.payload as ITodo]
            }
        case ActionTypes.removeTodo: 
            return {
                ...state,
                todos: state.todos.filter((elm:ITodo) => elm.id !== action.payload)
            }
        default:
            return state;
    }
}