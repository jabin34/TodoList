import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
      if (user) {
        navigate('/');
      }  

const  createUser = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password); 
    createUserWithEmailAndPassword(email, password);
    navigate('/');
}
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">ToDo App</h1>
      <p class="py-6"> Start using this app by simply Login . If you dont have an account please register with this app. This keep track your daily todo.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
          <form onSubmit={createUser}>
          <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" class="input input-bordered" />
        </div>
          <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" class="input input-bordered" />
          <label class="label">
           <p className='label-text-alt'>Already have an account?<Link to="/login" class="label-text-alt link link-hover">Login here</Link></p>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Register</button>
        </div>
          </form>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;