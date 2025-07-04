import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";


const Register = () => {
    const {register, handleSubmit, formState: errors} = useForm();
    const {createUser} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
          console.log(result.user);
          navigate(from)
        })
        .catch(error => {
          console.log(error.message);
        })
      }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Create an Account!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
            {/* Email */}
          <label className="label">Email</label>
          <input type="email" {...register('email', {required: true}, )} className="input" placeholder="Email" />
            {
                errors.email?.type === 'required' && <p className="text-red-500">Email is required</p>
            }

         {/* Password */}
          <label className="label">Password</label>
          <input type="password" {...register('password', {required: true, minLength: 6, })} className="input" placeholder="Password" />
          <div>
            {
                errors.password?.type === 'required' && <p className="text-red-500">Password is required.</p>
            }
            {
                errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters or longer.</p>
            }

            {/* Reset Password */}
            <a className="link link-hover">Forgot password?</a>

          </div>
          <button className="btn btn-primary text-black mt-4">Login</button>
        </fieldset>
        <p><small>Already have an account? <Link className="btn btn-link" to='/login'>Login</Link></small></p>
        </form>
        <SocialLogin/>
      </div>
    </div>
  );
};

export default Register;
