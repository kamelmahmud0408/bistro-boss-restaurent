import React from 'react';
import { useEffect,useRef,useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
   const captchaRef= useRef()
   const [disibled, setDisibled]= useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin=(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        console.log(email,password)
    }

    const handleValidCaptcha=()=>{
        const user_Captcha_value= captchaRef.current.value;
        if(validateCaptcha(user_Captcha_value)){
            setDisibled(false)
        }
       else{
        setDisibled(true)
       }

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card lg:w-1/2 w-full max-w-sm shadow bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} name='captcha' placeholder="type captcha" className="input input-bordered" />
                            <button onClick={handleValidCaptcha} className='btn btn-outline btn-xs'>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disibled} className="btn btn-primary" type="submit" value="login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;