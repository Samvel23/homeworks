import { Dispatch } from "react";

export interface ITodo {
    id: string,
    text: string,
    completed: boolean,

}
export enum Filters {
    all,
    active,
    completed,
}
export interface IState {
    todos: ITodo[],
    currentFilter: Filters,
}
export enum ActionTypes {
    setTodos,
    addTodo,
    removeTodo,
    updateTodo,
    setFilter,
    toggleTodo,
}
export interface IAction {
    type: ActionTypes,
    payload: unknown,
}
export interface IContextType {
    state: IState,
    dispatch: Dispatch<IAction>
}