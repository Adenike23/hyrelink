import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";


export default function MobileNav({ toggleMobileNav }) {
    
    return (
        <>
            <div className='fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center md:hidden'>
                <button onClick={toggleMobileNav} className="absolute top-10 right-10 bg-zinc-100 rounded-full p-3 text-2xl"><IoClose /></button>
                <ul className='list-none p-0 text-center space-y-8'>
                    <li>
                        <NavLink
                            to='/'
                            onClick={toggleMobileNav}
                            className={({ isActive }) => (isActive ? 'text-blue-600 text-lg' : 'text-[#a69e9e] text-lg hover:text-black')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            onClick={toggleMobileNav}
                            className={({ isActive }) => (isActive ? 'text-blue-600 text-lg' : 'text-[#a69e9e] text-lg hover:text-black')}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/services'
                            onClick={toggleMobileNav}
                            className={({ isActive }) => (isActive ? 'text-blue-600 text-lg' : 'text-[#a69e9e] text-lg hover:text-black')}>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <button className='button' onClick={toggleMobileNav}>Sign in</button>
                    </li>
                    <li>
                        <button className='py-[9px] px-[20px] rounded-3xl border bg-zinc-200' onClick={toggleMobileNav}>Sign up</button>
                    </li>
                </ul>
            </div>
        </>
    )
}