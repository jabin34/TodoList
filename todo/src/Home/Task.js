import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const Task = ({list,index,refetch}) => {
  
    const lineThrough = 'text-decoration: line-through';
    const {_id,taskName,description,flag}=list;
   
   
const taskCompleted =(id)=>{

let newflag  = !flag;
console.log(newflag);
    fetch(`http://localhost:4000/task/${id}`,{
        method:"put",
        headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify({newflag})
    }).then(res=>res.json())
    .then(data =>{
      console.log(data);
      if(newflag)
        {toast(taskName +' is completed');
        refetch();
    }
        else{
            toast(taskName +' need to finish');
            refetch();
          
        }
    
        
    
        //toast.error(`Failed to add!!`);
    
    })
   
   
}
  const deleteList = (id) =>{
     
      let confirmation = `Are you sure deleting ${taskName} ?`;
      if( window.confirm(confirmation)===true){
        console.log(id);
     const url = `http://localhost:4000/task/${id}`;
     fetch(url,{
         method:"delete",
     })
     .then((res) => res.json())
        .then((result) => {
          //console.log("ok");
          toast("Item Deleted Successfully!!!");
        });
      }
    
  }  
    //console.log(list);
    return (
        <tr>
        <th>{index+1}</th>
        {
            flag? <td className={lineThrough} >{ taskName?taskName:" "}</td>: <td>{ taskName?taskName:" "}</td>
        }
        {
            flag? <td className={lineThrough}>{description?description:" "}</td>: <td >{description?description:" "}</td>
        }
      
       
        <td>
            <button class="btn btn-xs btn-primary text-white m-1" onClick={()=>taskCompleted(_id)}>Completed</button>
            <button class="btn btn-xs btn-error text-white m-1" onClick={()=>deleteList(_id)}>Delete</button>
        </td>

      </tr>
     
    );
};

export default Task;