'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
     const handlerLoginFunc = async (data) => {
         console.log(data, "data")
         const { data:res, error } = await authClient.signIn.email({
             email: data.email,
             password: data.password,
             rememberMe: true,
             callbackURL: "/",
         });
         console.log(res, error);
        }
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-amber-100 mt-6 mb-6'>
            <div className='px-15 py-12 rounded-xl bg-base-100'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login your account</h2>
                <form className='space-y-3' onSubmit={handleSubmit(handlerLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input
                            type="email"
                            className="input"
                            placeholder="Type your email"
                            {...register("email")}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    </fieldset>

                    <fieldset className="fieldset">
                           <legend className="fieldset-legend">Password</legend>
                         <input
                             type="password"
                             className="input"
                             placeholder="Type your password"
                             {...register("password", { required: 'Password file is requird' })}
                         />
                         {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </fieldset>
                    <button className="btn w-full bg-[#F39C12] text-[#0B2D5B] text-xl mt-3 ">Login</button>

                    <div className='flex flex-col gap-4'>
                        <h1 className='flex justify-center items-center'>or</h1>
                        <button className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </form>
                <p className='mt-4'>
                    Don't have an account?
                    <Link href={"/register"} className='text-red-500'>Register </Link></p>
            </div>
        </div>
    );
     
}
export default LoginPage;