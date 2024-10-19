import { Link, NavLink } from "react-router-dom";
import { PiIntersectThreeLight } from "react-icons/pi";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MobileNav from "./MobileNav";

export default function Navbar() {
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(prev => !prev);
    };
    return (
        <nav className='fixed top-0 w-full bg-[#F6F6F6] flex justify-between items-center p-[15px] z-10'>
            <Link to='/' className='hyrelink'><PiIntersectThreeLight className='hrLogo'/> HyreLink</Link>
            <ul className='hidden md:flex list-none p-0 jusify-between gap-[20px]'>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-[#a69e9e] hover: text-black')}>Home</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'active text-blue-600' : 'text-[#a69e9e] hover: text-black')}>About</NavLink></li>
                <li><NavLink to='/services' className={({ isActive }) => (isActive ? 'active text-blue-600' : 'text-[#a69e9e] hover: text-black')}>Services</NavLink></li>
            </ul>
            <div className="hidden md:flex gap-2">
                <button className='button'>Sign in</button>
                <button className='py-[9px] px-[20px] rounded-3xl border bg-zinc-200'>Sign up</button>
            </div>


            <div className='md:hidden flex items-center'>
                <button onClick={toggleMobileNav} className='text-2xl'>
                    <IoMenu/>
                </button>
            </div>

            {mobileNav && ( <MobileNav toggleMobileNav={toggleMobileNav} /> )}
        </nav>
    )
}