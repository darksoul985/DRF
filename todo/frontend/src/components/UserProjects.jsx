import React from 'react';
import {useParams} from 'react-router-dom';


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.name}
           </td>
           <td>
                {project.link}
           </td>
           <td>
                {project.users.name}
           </td>
           <td>
                {project.is_active}
           </td>
           <td>
                {project.deadline}
           </td>
           <td>
                {project.start_date}
           </td>
        </tr>
    )
};


const UserProjects = ({projects}) => {
    console.log(projects)
    let {userId} = useParams();
    let filter_projects = projects.filter((project) => project.users.includes(parseInt(userId)));
    console.log(filter_projects)
    return (
        <table className="table">
            <th>
                Name
            </th>
            <th>
                Link
            </th>
            <th>
                Users
            </th>
            <th>
                No Completed
            </th>
            <th>
                Deadline
            </th>
            <th>
                Start Date
            </th>
            {filter_projects.map((project) => <ProjectItem project={project} />)}

        </table>
    )
};

export default UserProjects;
