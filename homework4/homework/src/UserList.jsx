export const UserList = ({ items }) => {
    return (
        <div>
            <h1>Userlist</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Login</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((elm) => (
                        <tr key={elm.id}>
                            <td>{elm.id}</td>
                            <td>{elm.name}</td>
                            <td>{elm.surname}</td>
                            <td>{elm.login}</td>
                            <td>{elm.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
