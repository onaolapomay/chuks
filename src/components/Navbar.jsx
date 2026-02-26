import React, {useState}from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)




    return (
        <nav className='w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50'>
            <div className='max-w-6xl mx-auto px-6 py-2'>
                <div className='flex items-center justify-between h-16'>

                <div className='flex gap-20 items-center'>
                    <Link to='/' className='text-2xl font-serif text-bold text-[#e67e22]'>Chuks Kitchen</Link>
                
                

                <ul className='hidden md:flex justify-center space-x-28 font-medium text-slate-600 text-sm tracking-wide'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#e67e22]' :  'hover:text-[#e67e22] transition'}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/explore' className={({ isActive }) => isActive ?'text-[#e67e22]': 'hover:text-[#e67e22] transition'}>Explore</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#e67e22]' :  'hover:text-[#e67e22] transition'}>My Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-[#e67e22]' :  'hover:text-[#e67e22] transition'}>Account</NavLink>
                    </li>
                    <li>
                        <Link to='/login' className='bg-[#e67e22] text-white px-8 py-2 rounded-md font-semibold text-sm hover:bg-[#d35400] transition shadow-md'>Login</Link>
                    </li>
                </ul>
                </div>

                <div className='md:hidden flex items-center'>
                    <button onClick={() => setIsOpen(!isOpen)} className={({ isActive }) => isActive ? 'text-[#e67e22]' :'text-slate-700 transition md:hidden'}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
                </div>
            </div>

            {isOpen && (
                <>
                <ul className='md:hidden flex flex-col items-center space-y-6 py-6 font-medium text-slate-600 bg-white border-t'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#e67e22]' : 'hover:text-[#e67e22] transition'}>Home</NavLink>
                    </li>
        
                    <li>
                        <NavLink to='/explore' className={({ isActive }) => isActive ? 'text-[#e67e22]' : 'hover:text-[#e67e22] transition'}>Explore</NavLink>
                    </li>

                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#e67e22]' : 'hover:text-[#e67e22] transition'}>My Orders</NavLink>
                    </li>

                    <li>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-[#e67e22]' : 'hover:text-[#e67e22] transition'}>Account</NavLink>
                    </li>
                        
                    <li>
                        <Link to='/login' className='bg-[#e67e22] text-white px-8 py-2 rounded-md font-semibold text-sm hover:bg-[#d35400] transition shadow-md'>Login</Link>
                    </li>
                </ul>
                </>
            )}
        </nav>
    )
}

export default Navbar
