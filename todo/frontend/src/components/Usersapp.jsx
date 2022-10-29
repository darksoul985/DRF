import React from 'react';
import {Link} from 'react-router-dom';


const UsersItem = ({user}) => {

    return (
        <tr>
            <td>
                {/* TODO не работает ссылка перехода на пользователя*/}
                <Link to={'/users/${user.id}'}>{user.username}</Link>
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UsersList = ({users}) => {
    return(
        <table>
            <th>
                Username
            </th>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Email
            </th>
            {users.map((user) => <UsersItem user={user} />)}
        </table>

    )
};

export default UsersList;
