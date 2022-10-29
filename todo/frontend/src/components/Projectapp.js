import React from 'react';


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

const ProjectList = ({projects}) => {
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
            {projects.map((project) => <ProjectItem project={project} />)}

        </table>
    )
};

export default ProjectList;
