'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <nav className="fixed top-0 left-0 w-full z-50 container-fluid nav_bg px-5 md:px-9 lg:px-14 py-2 flex items-center justify-between  bg-white shadow-lg">
            {/* Logo */}
            <Link href='/'>
                <div className="bg-white rounded-full">
                    <Image width={32} height={32} className='w-8 h-8' src='/Images/Svg/mainicon.svg' alt="ASIcon" />
                </div>
            </Link>
            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-6">
                <li>
                    <Link
                        href="/"
                        className="relative group text-[#4f304f] ff_Montserrat fw-normal text-[20px] hover:text-[#e91e63]"
                    >
                        Home
                        <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#e91e63] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#workbook"
                        className="relative group text-[#4f304f] ff_Montserrat fw-normal text-[20px] hover:text-[#e91e63]"
                    >
                        Workbook
                        <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#e91e63] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="#resume"
                        className="relative group text-[#4f304f] ff_Montserrat fw-normal text-[20px] hover:text-[#e91e63]"
                    >
                        Resume
                        <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#e91e63] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                </li>

                <li>
                    <Link
                        href="#service"
                        className="relative group text-[#4f304f] ff_Montserrat fw-normal text-[20px] hover:text-[#e91e63]"
                    >
                        Service
                        <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#e91e63] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                </li>
            </ul>


            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-4">
                <Link href="https://www.linkedin.com/in/mamta-sangwan-96b838355/" target="_blank">
                    <Image width={24} height={24} src="/Images/Svg/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:fill-black " />
                </Link>
                <Link href="https://github.com/mamta-552" target="_blank">
                    <Image width={24} height={24} src="/Images/Svg/github.svg" alt="GitHub" className="w-6 h-6" />
                </Link>
                <Link href="https://t.ly/KY8Z5" target="_blank">
                    <Image width={24} height={24} src="/Images/Svg/whatsapp.svg" alt="Whatsapp" className="w-5 h-5" />
                </Link>



                <div className="flex justify-center items-center">
                    <div className="h-7 w-[2px] horizontal_line"></div>
                </div>

                <div className="flex justify-center">
                    <Link href="#contact">
                        <button className="relative shadow bg-[#F44C8B] text-white px-4 py-1 rounded-2xl  overflow-hidden group">
                            <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            <span className="relative z-10 group-hover:text-black">Contact Me</span>
                        </button>
                    </Link>
                </div>




            </div>

            {/* Contact Us Button */}


            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-[#ec2b82]"
                onClick={() => setIsMenuOpen(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                    />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div
                className={`fixed  top-0 right-0 h-full bg-gradient-to-b from-[#f1d7e2] to-[#efc5e4]  text-white w-[40%] transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-[9999999999999]`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-[#ec2b82]"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Mobile Links */}
                <ul className="flex flex-col items-center gap-6 mt-20">
                    <li onClick={() => setIsMenuOpen(false)}>
                        <Link
                            href="/"
                            className="relative group text-[rgb(79,48,79)] ff_Montserrat fw-normal text-[20px] hover:text-[#e91e63] "
                        >
                            Home
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#e91e63] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                        <Link
                            href="/#workbook"
                            className="relative group text-[#4f304f] ff_Montserrat fw-normal text-[20px] hover:text-[#e91e63]"
                        >
                            Workbook
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#e91e63] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                        <Link
                            href="/#resume"
                            className="relative group text-[#4f304f] ff_Montserrat fw-normal text-[20px] hover:text-[#e91e63]"
                        >
                            Resume
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#e91e63] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </li>

                    <li onClick={() => setIsMenuOpen(false)}>
                        <Link
                            href="/#service"
                            className="relative group text-[#4f304f] ff_Montserrat fw-normal text-[20px] hover:text-[#e91e63]"
                        >
                            Service
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#e91e63] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </li>
                </ul>



                {/* Contact Us Button */}
                <div onClick={() => setIsMenuOpen(false)} className="flex justify-center mt-7">
                    <Link href="#contact">
                        <button className="relative shadow bg-[#F44C8B] text-white px-4 py-1 rounded-2xl  overflow-hidden group">
                            <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            <span className="relative z-10 group-hover:text-black">Contact Me</span>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
