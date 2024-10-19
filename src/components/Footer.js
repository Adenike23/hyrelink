import { PiIntersectThreeLight } from "react-icons/pi";

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer>
            <div className='mb-[3rem] text-center bg-blue-600 p-5 md:p-10'>
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Let's Join And Get Convenience</h2>
                <p className="leading-7 mb-6 max-w-lg mx-auto text-sm md:text-base">Experience the Features and Convenience of Next Level Human Resource Management, With Us</p>
                <button className='button'>Join Now</button>
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center md:items-start gap-10 md:gap-0 p-5'>
                <div className="text-center md:text-left">
                    <h3 className='text-xl flex items-center justify-center md:justify-start mb-2 text-blue-600'><PiIntersectThreeLight className='hrLogo'/> HyreLink</h3>
                    <p className='text-xs'>Street Washington Avenue Number A2904.</p>
                    <p className='text-xs'>Manchester, Kentucky</p>
                    <p className='text-xs'>(34452)</p>
                </div>
                <div className='flex flex-wrap justify-center md:justify-between gap-10'>
                    <ul className='list-none pb-[0.6rem]'>
                        <h4>Section Page</h4>
                        <li className="text-[#C0C2C9] text-sm hover:text-white cursor-pointer">Advantage</li>
                        <li className="text-[#C0C2C9] text-sm hover:text-white cursor-pointer">Feature</li>
                        <li className="text-[#C0C2C9] text-sm hover:text-white cursor-pointer">Pricing</li>
                    </ul>
                    <ul className='list-none pb-[0.6rem]'>
                        <h4>Section Page</h4>
                        <li className="text-[#C0C2C9] text-sm hover:text-white cursor-pointer">Advantage</li>
                        <li className="text-[#C0C2C9] text-sm hover:text-white cursor-pointer">Feature</li>
                        <li className="text-[#C0C2C9] text-sm hover:text-white cursor-pointer">Pricing</li>
                    </ul>
                    <ul className='list-none pb-[0.6rem]'>
                        <h4>Section Page</h4>
                        <li className="text-[#C0C2C9] text-sm hover:text-white cursor-pointer">Advantage</li>
                        <li className="text-[#C0C2C9] text-sm hover:text-white cursor-pointer">Feature</li>
                        <li className="text-[#C0C2C9] text-sm hover:text-white cursor-pointer">Pricing</li>
                    </ul>
                </div>
            </div>
            <p className='text-center text-xs md:text-sm mt-5 p-5 border-t border-gray-200'>&copy; {year} Hyrelink. All rights reserved.</p>
        </footer>
    )
}