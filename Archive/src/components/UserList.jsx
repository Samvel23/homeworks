import Types from 'prop-types'

export const UserList = ({ users, onDelete, onUp }) => {
    const more = (elm) => {
        if(elm.salary > 800000) {
            return {color: "red"}
        }
        return {};
    }
    return <div>
        <h1>UserList</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>salary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                    {users.map(elm => 
                        <tr key={elm.id}>
                            <td>{elm.id}</td>
                            <td>{elm.name}</td>
                            <td>{elm.surname}</td>
                            <td style={more(elm)}>{elm.salary}</td>
                            <td style={{display: "flex"}}>
                                <button style={{margin: "0"}} onClick={() => onDelete(elm.id)}>Delete</button>
                                <button style={{margin: "0"}} onClick={() => onUp(elm.id)}>Up</button>
                            </td>
                        </tr>
                    )}
            </tbody>
        </table>
    </div>
}
UserList.propTypes = {
    users: Types.arrayOf(Types.exact({
        id: Types.string,
        name: Types.string,
        salary: Types.number,
        surname: Types.string,
        onDelete: Types.func,
        onUp: Types.func,
    }))
}