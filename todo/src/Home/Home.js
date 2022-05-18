import React from 'react';
import TodoForm from './TodoForm';

const Home = () => {
    return (
        <div className='flex  sm:flex-column md:flex-row justify-around g-5'>
           <TodoForm/>
           
        </div>
    );
};

export default Home;