import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/R6nM5cz/todog.webp" class="max-w-sm rounded-lg shadow-2xl" alt='img' />
    <div>
      <h1 class="text-5xl font-bold">Welcome to Todo App</h1>
      <p class="py-6">ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules.</p>
      <button class="btn btn-outline btn-success "  onClick={()=>navigate('/home')}>Get Started</button>
    </div>
  </div>
</div>
        // <div className='flex  flex-col md:flex-row justify-center  md:justify-around'>
        //      <h1 className='text-3xl align-middle '>Welcome To TodoList App</h1>
        //    <div className='p-5 max-w-sm'><img src='https://i.ibb.co/R6nM5cz/todog.webp' alt='img'/></div>
           
        // </div>
    );
};

export default Main;