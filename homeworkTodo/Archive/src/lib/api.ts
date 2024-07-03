import axios from "axios";
import { ITodo } from "./types";
type inputTodo = Omit <ITodo, "id">
export const getAll = async():Promise<ITodo[]> => {
    const response = await axios.get("http://localhost:3004/todos")
    return response.data;
}
export const Add = async(obj:inputTodo):Promise<ITodo[]> => {
    const response = await axios.post("http://localhost:3004/todos", obj)
    return response.data;
}
// export const Remove = async():Promise<ITodo[]> => {
//     const response = await axios.delete("http://localhost:3004/todos" + id)
// }