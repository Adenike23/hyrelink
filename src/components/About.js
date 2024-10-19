import { motion } from 'framer-motion'
import about from '../assets/images/about.webp'
import about2 from '../assets/images/about2.webp'
import about3 from '../assets/images/about3.webp'
import jane from '../assets/images/woman.jpg'
import john from '../assets/images/man2.jpg'
import joe from '../assets/images/man.webp'


export default function About() {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5, duration: 1 }} 
            exit={{x: '-100vw', transition: 'easeInOut'}} 
            className='m-[2rem] md:m-[3rem] mt-[6rem] md:mt-[8rem]'>
            <h3 className='text-center text-xl md:text-2xl'>About us</h3>
            <h3 className='text-center leading-7 my-3 text-sm md:text-base lg:text-lg'>
                    Welcome to <span className='text-[#0056D2]'>Hyperlink</span>, your trusted partner in human resources solutions. 
                    With a dedicated team and years of experience, we pride ourselves on delivering 
                    tailored HR services that meet the unique needs of businesses.
                </h3>

            <div className='flex flex-col lg:flex-row gap-[1rem] justify-between items-center my-10'>
                <div className='w-full lg:w-[50%]'>
                    <div className='flex gap-1'>
                        <img src={about} alt="about 1" className='w-[50%] h-auto' />
                        <img src={about2} alt="about 2" className='w-[50%] h-auto' />
                    </div>
                    <div className='flex gap-1 mt-1'>
                        <img src={about3} alt="about 3" className='w-[50%] h-auto' />
                        <img src={about} alt="about 4" className='w-[50%] h-auto' />
                    </div>
                </div>
                
           <div className='w-full lg:w-[50%]'>
                <div className='mb-10 text-center'>
                        <h3 className='text-center text-2xl text-[#0056D2] mb-5'>Our Mission</h3>
                        <p className='text-sm color-[#666] leading-7'>
                            Our mission is to support organizations in building a strong and efficient workforce by 
                            offering exceptional HR services including recruitment, training, and consultancy. 
                            We believe in fostering a workplace environment where every employee can grow, contribute, 
                            and feel valued.
                        </p>
                    </div>
                    <div className='mb-10 text-center'>
                        <h3 className='text-center text-2xl text-[#0056D2] mb-5'>Our Vision</h3>
                        <p className='text-sm color-[#666] leading-7'>
                            Our vision Our vision is to empower organzations by connecting them with top talents. 
                            We believe in fostering a workplace environment where every employee can grow, contribute, 
                            and feel valued.
                        </p>
                    </div>
                </div>
            </div>

            
             <div className='mb-10'>
                    <h3 className='text-center text-2xl text-[#0056D2] mb-5'>Our Values</h3>
                    <ul className='leading-7 flex-col md:flex-row md:justify-center gap-3 text-sm text-[#555] ml-5 text-center list-none'>
                        <li>Integrity: We uphold the highest standards of integrity in everything we do.</li>
                        <li>Collaboration: We work closely with our clients to achieve mutual goals.</li>
                        <li>Excellence: We strive for excellence in every project we undertake.</li>
                        <li>Respect: We foster a culture of respect for all individuals.</li>
                    </ul>
            </div>


         <div className='text-center'>
             <h3 className='text-center text-2xl text-[#0056D2] mb-5'>Meet Our Team</h3>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                 <div className='bg-white border border-gray-300 rounded-lg p-5 text-center shadow-md'>
                     <img src={jane} alt="Team Member 1" className='rounded-full w-[150px] h-[150px] mb-5' />
                     <h4 className='text-[1.5rem] color-[#333] mb-3'>Jane Doe</h4>
                     <p className='text-[#666] text-[1rem]'>CEO & Founder</p>
                 </div>
                 <div className='bg-white border border-gray-300 rounded-lg p-5 text-center shadow-md'>
                     <img src={john} alt="Team Member 2" className='rounded-full w-[150px] h-[150px] mb-5' />
                     <h4 className='text-[1.5rem] color-[#333] mb-3'>John Smith</h4>
                     <p className='text-[#666] text-[1rem]'>Head of HR</p>
                 </div>
                 <div className='bg-white border border-gray-300 rounded-lg p-5 text-center shadow-md'>
                     <img src={joe} alt="Team Member 3" className='rounded-full w-[150px] h-[150px] mb-5' />
                     <h4 className='text-[1.5rem] color-[#333] mb-3'>Joe Johnson</h4>
                     <p className='text-[#666] text-[1rem]'>HR Consultant</p>
                 </div>
             </div>
         </div>
        </motion.section>
        
    )
}