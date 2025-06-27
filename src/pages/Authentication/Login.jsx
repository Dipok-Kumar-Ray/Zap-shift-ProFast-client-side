import React from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        console.log(data);
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">

          <label className="label">Email : </label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />
          

          <label className="label">Password : </label>
          {
            errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>
          }
          {
            errors.password?.type === 'minLength' && <p className="text-red-500">Password be 6 characters or longer.</p>
          }
          <input type="password" {...register('password', {required: true, minLength: 6, })} className="input" placeholder="Password" />
         

          <div>         
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <SocialLogin/>
    </div>
  );
};

export default Login;
