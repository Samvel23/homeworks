import { useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import axios from 'axios'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users, setUsers] = useState([])
  const addItem = obj => {setUsers([...users, obj])}
  const remove = (id) => {
    axios
    .delete("http://localhost:3004/users/" + id)
    .then(res => {setUsers(users.filter(elm => elm.id !== id))})
    toast.success("Deleted")
  }
  const salaryUp = (id) => {
    const user = users.find(user => user.id === id)
    axios
    .put("http://localhost:3004/users/" + id, {salary: user.salary - '50000' + 100000})
    .then(res => {setUsers(prevUsers => prevUsers.map(user => user.id === id? {...user, salary:res.data.salary } : user))})
  }

  useEffect(() => {
    axios
    .get("http://localhost:3004/users")
    .then(res => {setUsers(res.data)})
  }, [])


  return (
    <div className='row'>
      <AddUser
        onAdd={addItem}
      />
      <ToastContainer />
      <UserList
        users = {users}
        onDelete={remove}
        onUp={salaryUp}
      />
    </div>
  )
}

export default App
