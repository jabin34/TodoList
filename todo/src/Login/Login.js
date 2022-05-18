import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const from = location.state?.from?.pathname || "/";
      if (user) {
        navigate(from, { replace: true });
      }
    const loginUser=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        signInWithEmailAndPassword(email,password);
        
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
          <form onSubmit={loginUser}>
          <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input  name="email" type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" class="input input-bordered" />
          <label class="label">
           <p className='label-text-alt'>New to this app ? <Link to="/register" class="label-text-alt link link-hover">Register here</Link></p>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
          </form>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;