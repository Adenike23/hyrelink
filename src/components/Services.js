import { PiBagSimpleLight, PiShirtFolded, PiCardsThreeLight, PiReceiptLight } from "react-icons/pi";
import { motion } from "framer-motion";

export default function Services() {
    const services = [
        {
            id: 1,
            logo: <PiShirtFolded />,
            title: 'Recruitment',
            description: 'We help you find the best talent for your organization.'
        },
        {
            id: 2,
            logo: <PiBagSimpleLight />,
            title: 'Training & Development',
            description: 'Comprehensive training programs for employee growth.'
        },
        {
            id: 3,
            logo: <PiCardsThreeLight />,
            title: 'HR Consulting',
            description: 'Expert HR consultation to improve your business strategies.'
        },
        {
            id: 4,
            logo: <PiReceiptLight />,
            title: 'Payroll Management',
            description: 'Efficient and accurate payroll management services.'
        }
    ];
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5, duration: 1 }} 
            exit={{x: '-100vw', transition: 'easeInOut'}} >
            <div className='p-[40px] bg-[#f9f9f9] mt-[6rem]'>
            <div className='max-w-[800px] mx-auto text-center mb-10 px-4 sm:px-6 lg:px-8'>
                <h2 className='text-2xl sm:text-3xl mb-5'>Welcome to Our Services</h2>
                <p className='leading-7 text-base sm:text-lg mb-5 text-slate-600'>
                    At Hyrelink, we are committed to delivering exceptional human resources solutions tailored to your business needs. Our expert team is here to provide the support and expertise you need to grow and manage your workforce effectively.
                </p>
                <p className='leading-7 text-base sm:text-lg mb-5 text-slate-600'>
                    We offer a wide range of services designed to optimize your HR processes, from recruitment and talent acquisition to payroll management and employee development. Explore our key services below to learn more about how we can help your business thrive.
                </p>
            </div>


            <h2 className='text-center text-xl sm:text-2xl mb-10'>Our Core Services</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 sm:px-6 lg:px-8'>
                {services.map(service => (
                    <div key={service.id} className='bg-white border border-gray-200 rounded-md p-5 text-center shadow-md transition-transform duration-300 ease-in-out hover:transform -translate-y-2'>
                        <div className='mb-3 text-5xl flex justify-center'>{service.logo}</div>
                        <h3 className='text-lg mb-3 text-[#0056D2]'>{service.title}</h3>
                        <p className='text-base text-slate-500 leading-6'>{service.description}</p>
                    </div>
                ))}
            </div>


            <div className='max-w-[800px] mx-auto text-center my-10 px-4 sm:px-6 lg:px-8'>
                <h3 className='text-2xl sm:text-3xl mb-5'>Why Choose Us?</h3>
                <p className='leading-7 text-base mb-5 text-slate-600'>
                    We pride ourselves on being more than just a service provider. Our team works closely with you to understand your specific needs and challenges, ensuring that our solutions are fully aligned with your business goals. Whether you're looking for top talent, training programs to enhance your team's skills, or comprehensive HR consulting, we have you covered.
                </p>
                <p className='leading-7 text-base mb-5 text-slate-600'>
                    Let us help you streamline your HR processes, enhance productivity, and foster a positive work environment.
                </p>
            </div>
        </div>
        </motion.section>
    )
}