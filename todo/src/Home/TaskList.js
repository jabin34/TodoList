import React from 'react';
import Task from './Task';

const TaskList = ({task,refetch}) => {
    return (
        <div className=' mx-4  grow'>
            <h2 className='text-center text-2xl p-3 text-bold'>Your Task</h2>
            <div class="overflow-x-auto">
  <table class="table w-fulltable table-compact w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
     {task.map((list,index)=><Task list={list} index={index} refetch={refetch}/>)}
     
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default TaskList;