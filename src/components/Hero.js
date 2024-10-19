import { LuLayoutDashboard } from "react-icons/lu";
import { LiaSave } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import mainImage2 from '../assets/images/image2.png'
import mainImage from '../assets/images/image3.png'

export default function Main() {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5, duration: 1 }} 
            exit={{x: '-100vw', transition: 'easeInOut'}} >
            <div className='w-full max-w-2xl my-[3rem] mt-[7rem] md:mt-[9rem] mx-auto text-center px-4'>
                <h2 className='text-4xl font-medium'>HR Management Definitely Easy and Simple</h2>
                <p className='leading-7 mb-[2rem] mt-5'>Simple Operations, Empower Teams, And Optimize Workforce Efficiency. With Our Comprehensive Human Resources Solutions. We provide expert human resources services to help businesses grow and thrive. From recruitment to payroll management, we deliver tailored solutions to meet your organization's needs.</p>
                <button className='button'>Get Started For Free</button>
            </div>

            <div>
                <div className='w-full max-w-2xl my-[3rem] mx-auto text-center px-4'>
                    <h3 className='text-xl font-medium'>Elevating Your Experience Key Benefits</h3>
                    <p className='leading-7 mb-[2rem] mt-5'>Embrace the Transformative Advantages that Proper Efficiency, Collaboration and Success in HR Management.</p>
                </div>
                <div className='md:grid grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-[8rem] lg:mx-[15rem] cursor-pointer'>
                <div className='shadow-md transition duration-200 bg-white rounded-md p-3.5 text-center m-3 w-full mx-auto hover:transform hover:translate-y-[-5px]'>
                    <HiOutlineDesktopComputer className='w-[20%] mx-auto h-[40%] mb-3' />
                    <h2 className='text-sm my-1'>Easy Access</h2>
                    <p className='text-sm text-[#C0C2C9]'>You Can Access It On A Phone Or Laptop.</p>
                </div>
                <div className='shadow-md transition duration-200 bg-white rounded-md p-3.5 text-center m-3 w-full mx-auto hover:transform hover:translate-y-[-5px]'>
                    <FiUsers className='w-[20%] mx-auto h-[40%] mb-3' />
                    <h2 className='text-sm my-1'>Collaboration</h2>
                    <p className='text-sm text-[#C0C2C9]'>With Our Platform, You Can Collaborate With The Other HR.</p>
                </div>
                <div className='shadow-md transition duration-200 bg-white rounded-md p-3.5 text-center m-3 w-full mx-auto hover:transform hover:translate-y-[-5px]'>
                    <LiaSave className='w-[20%] mx-auto h-[40%] mb-3' />
                    <h2 className='text-sm my-1'>Auto Save</h2>
                    <p className='text-sm text-[#C0C2C9]'>Use The Internet So Every Update Will Auto Save.</p>
                </div>
                <div className='shadow-md transition duration-200 bg-white rounded-md p-3.5 text-center m-3 w-full mx-auto hover:transform hover:translate-y-[-5px]'>
                    <LuLayoutDashboard className='w-[20%] mx-auto h-[40%] mb-3' />
                    <h2 className='text-sm my-1'>Many Features</h2>
                    <p className='text-sm text-[#C0C2C9]'>We Have The Best Features That Can Help You.</p>
                </div>
                </div>
            </div>

            <div>
                <div className='w-full max-w-2xl my-[3rem] mx-auto text-center px-4'>
                    <h3 className='text-xl font-medium'>Robust Feature For Seamless HR Management</h3>
                    <p>Empower Your Organization with a Suite of Innovative and Customizable HR Tools.</p>
                    <img src={mainImage2} alt='' className='my-[3rem]'/>
                    <p><span className='text-blue-700'>Recruitment board</span> feature so that it can make it easier for you to determine the status of recruitment process for each of your candidates</p>
                    <img src={mainImage} alt='' className='my-[3rem]'/>
                    <p><span className='text-blue-700'>Job automation</span> feature so that every candidate that appears in job recruitment is based on data available open jobs</p>
                </div>

            </div>
        </motion.section>
    )
}