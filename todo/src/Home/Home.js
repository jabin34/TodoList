import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import TodoForm from './TodoForm';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Home = () => {

    
    const{data:lists,isLoading,refetch} = useQuery('tsak',() => fetch(`http://localhost:4000/alltask`)
    .then(res=>res.json())   );
   if(isLoading){
       return <Loading></Loading>;
   }
    return (
        <div className='flex  flex-col md:flex-row justify-center  md:justify-around g-5 m-3 pt-5'>
           <TodoForm refetch={refetch}/>
           <TaskList task={lists} refetch={refetch} />
        </div>
    );
};

export default Home;