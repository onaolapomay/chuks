import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, Eye, EyeOff, Facebook } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            <div className='hidden md:block relative md:w-1/2 h-screen md:h-auto overflow-hidden top-0'>
                <img src="/signup.png" 
                alt="Chucks Kitchen"
                className='absolute inset-0 w-full h-full object-cover' />

                <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-8 text-white'>
                    <h2 className='text-4xl font-serif italic font-bold mb-4'>
                        Chucks Kitchen
                    </h2>
                    <p className='max-w-md text-lg leading-relaxed'>Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favourite today!</p>
                </div>
            </div>

            <div className='w-full md:w-1/2 flex items-center justify-center bg-white p-6 md:p-16'>
                <div className='w-full max-w-md'>
                    <div className='text-center mb-8'>
                        <h3 className='text-slate-400 italic font-serif text-lg mb-1'>Chucks Kitchen</h3>
                        <h2 className='text-2xl font-serif font-bold'>Login Your Account</h2>
                    </div>

                    <form className='space-y-6'>
                        <div>
                            <label className='block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1'>
                                Email
                            </label>
                            <input type="email" placeholder='name@gmail.com' className='w-full px-4 py-3 bg-slate-50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition'/>
                        </div>

                        <div>
                            <div className='flex justify-between items-center mb-1'>
                                <label className='block text-xs font-semibold text-slate-500 uppercase tracking-wide'>
                                    Password
                                </label>
                            </div>
                            <div className='relative'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='Enter your password' 
                                    className='w-full px-10 py-3 bg-slate-50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition'
                                />
                                <Lock size={20} className='absolute left-3 top-3.5 text-slate-400' />
                                <button type='button' className='absolute right-3 top-3.5 text-slate-400' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div> 

                            <div className='flex justify-end mt-1'>
                                <Link to='/forgot' className='text-xs font-bold text-blue-500 hover:text-blue-600 transition'>
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <button className='w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition duration-200'>Login</button>
                        
                        <div className='relative flex py-2 items-center'>
                            <div className='flex-grow border-t border-slate-200'></div>
                            <span className='flex-shrink mx-4 text-slate-400 text-sm'>or continue with</span>
                            <div className='flex-grow border-t border-slate-200'></div>
                        </div>

                        <div className='space-y-3'>
                            <button type='button' className='w-full bg-white border border-slate-300 rounded-lg px-4 py-3 flex items-center justify-center gap-3 hover:bg-slate-50 transition'>
                                <Facebook size={20} className='text-blue-600' />
                                <span className='text-sm font-medium text-slate-700'>Continue with Facebook</span>
                            </button>
                            
                            <button type='button' className='w-full bg-white border border-slate-300 rounded-lg px-4 py-3 flex items-center justify-center gap-3 hover:bg-slate-50 transition'>
                                <FcGoogle size={20} />
                                <span className='text-sm font-medium text-slate-700'>Continue with Google</span>
                            </button>
                        </div>
                    </form>

                    <p className='text-center text-sm text-slate-500 mt-8'>
                        Don't have an account? <Link to='/signup' className='text-blue-500 hover:text-blue-600 font-bold transition'>create an account</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login