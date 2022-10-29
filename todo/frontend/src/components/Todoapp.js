import React from 'react';

const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.users}
            </td>
            <td>
                {todo.theme}
            </td>
            <td>
                {todo.description}
            </td>
            <td>
                {todo.deadline}
            </td>
            <td>
                {todo.is_active}
            </td>
        </tr>
    )
};

const TodosList = ({todolist}) => {
    return(
        <table>
            <th>
                Project
            </th>
            <th>
                Users
            </th>
            <th>
                Theme
            </th>
            <th>
                Description
            </th>
            <th>
                Deadline
            </th>
            <th>
                No completed
            </th>

            {todolist.map((todo) => <TodoItem todo={todo} />)}

        </table>

    )
};

export default TodosList;
