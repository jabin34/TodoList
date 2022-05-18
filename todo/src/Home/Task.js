import React from 'react';

const Task = ({list,index}) => {
    const {taskName,description}=list;
    console.log(list);
    return (
        <tr>
        <th>{index+1}</th>
        <td>{ taskName?taskName:" "}</td>
        <td>{description?description:" "}</td>
        <td>Blue</td>
      </tr>
     
    );
};

export default Task;