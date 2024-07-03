import { useContext, useState } from "react"
import { Add } from "../lib/api";
import { ToDoContext } from "../lib/context";
import { ActionTypes } from "../lib/types";

export const AddToDo:React.FC = () => {
    const context = useContext(ToDoContext)
    if(!context) {
        throw new Error("blt")
    }
    const [text, setText] = useState<string>("")
    const { dispatch } = context
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Add({text, completed:false})
        .then(res =>  { 
            dispatch({type:ActionTypes.addTodo, payload: res})
            setText("")
        })
    }
    console.log(text)
    return <div>
        <form onSubmit={handleSubmit}>
            <input 
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button>save</button>
        </form>
    </div>
}