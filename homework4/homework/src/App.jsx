import { useState } from 'react'
import './App.css'
import { UserAdd } from './UserAdd.jsx'
import { UserList } from './UserList.jsx'

function App() {
  const addUser = (user) => {
    setUsers([...users, {...user, id:Date.now()}])
  }
  const [users,setUsers] = useState([
    {id: 1, name: "Alice", surname: "Smith", login: "alice", password: "123"},
    {id: 2, name: "Bob", surname: "Johnson", login: "bob", password: "456"},
    {id: 3, name: "Charlie", surname: "Brown", login: "charlie", password: "789"},
  ])
  return(
    <div>
      <UserList items={users} />
      <UserAdd addUser={addUser} />
    </div>
  )
}

export default App;

