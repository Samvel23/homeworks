import { useContext } from "react";
import { ActionTypes, ITodo } from "../lib/types";
import { ToDoContext } from "../lib/context";
import axios from "axios";

interface Props {
    todo: ITodo;
}

export const ToDoItem: React.FC<Props> = ({ todo }) => {
  const isCompleted = todo.completed;
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("ToDoContext is not provided");
  }
  const { dispatch } = context;

  const doneUn = async (completed: boolean) => {
    try {
      await axios.put(`http://localhost:3004/todos/${todo.id}`, { ...todo, completed: !completed });
      dispatch({ type: ActionTypes.updateTodo, payload: { ...todo, completed: !completed } });
    } catch (e) {
      console.error("Failed to update todo", e);
    }
  };

  const handleRemove = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3004/todos/${id}`);
      dispatch({ type: ActionTypes.removeTodo, payload: id });
    } catch (e) {
      console.error("Failed to delete todo", e);
    }
  };

  return (
    <div className={`item ${isCompleted ? "completed" : ""}`}>
      <span>{todo.text}</span>
      <div>
        <button onClick={() => doneUn(isCompleted)}>
          {!isCompleted ? "done" : "undo"}
        </button>
        <button onClick={() => handleRemove(todo.id)}>remove</button>
      </div>
    </div>
  );
};
