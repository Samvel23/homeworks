import { useState } from "react"

export const UserAdd = ({ addUser }) => {
    const [error,setError] = useState("")
    const [input, setInput] = useState({name: "", surname: "", login: "", password: ""})
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input.name || !input.surname || !input.login || !input.password) {
            setError("Fill all fields")
            return;
        }
        if(input.password.length < 6) {
            setError("Password must be at least 6 characters")
            return;
        }
        addUser(input);
        setInput({ name: "", surname: "", login: "", password: "" }); 
        setError("")
    }
    return (
        <div>
            <h1>UserAdd</h1>
            {error && <p style={{color: "red"}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={input.name} 
                    onChange={(e) => setInput({...input, name: e.target.value})} 
                    placeholder="name" 
                />
                <input 
                    type="text" 
                    value={input.surname} 
                    onChange={(e) => setInput({...input, surname: e.target.value})} 
                    placeholder="surname" 
                />
                <input 
                    type="text"
                    value={input.login} 
                    onChange={(e) => setInput({...input, login: e.target.value})} 
                    placeholder="login" 
                />
                <input 
                    type="text" 
                    value={input.password} 
                    onChange={(e) => setInput({...input, password: e.target.value})} 
                    placeholder="password" 
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}