import { useState } from 'react';
import { AirplayIcon, BadgeIcon } from 'lucide-react';
import { Link, Navigate, useLocation } from 'react-router-dom';

const Navbar = (props) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <header className="absolute top-0 left-0 w-full navbar" >
            <div className="relative bg-transparent">
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-20">
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="/" title="" className="flex items-center">
                                    <BadgeIcon /><p className='text-4xl font-semibold ml-2'>eQuran</p>
                            </a>
                        </div>

                        <button 
                            type="button" 
                            className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
                            onClick={toggleNavbar}
                        >
                            <AirplayIcon />
                        </button>

                        <div className="hidden lg:flex lg:items-center lg:space-x-10 lg:pr-[160px]">
                            <Link to={"/"} title="" className={`text-base font-medium ${location.pathname == "/" ? "text-violet-400" : `text-[${props.colors.text}]`}`}> Verses Generator </Link>
                            <Link to={"/calculator"} title="" className={`text-base font-medium ${location.pathname == "/calculator" ? "text-violet-400" : `text-[${props.colors.text}]`}`}> Calculator </Link>
                        </div>

                            <a 
                                onClick={props.toggleTheme} 
                                href="#" 
                                title="" 
                                className="bg-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" 
                                role="button"
                            >
                                {props.isDarkMode ?
                                    <svg id="theme-toggle-light-icon" className=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                                    </svg> 
                                    : 
                                    <svg id="theme-toggle-dark-icon" className=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                    </svg>
                                }
                            </a>
                    </nav>
                </div>
            </div>

            {isNavbarOpen && (
                <nav className={`absolute top-0 left-0 flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 sm:px-6 lg:hidden z-50`} style={{background: props.colors.background}}>
                    <button 
                        type="button" 
                        className="inline-flex p-2 transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
                        onClick={toggleNavbar}
                    >
                        <BadgeIcon /><p className='text-4xl font-semibold ml-2'>eQuran</p>
                    </button>

                    <div className="flex flex-col flex-grow h-full">
                        <nav className="flex flex-col flex-1 mt-10 space-y-2">
                            <a href="#" title="" className={`flex w-full py-2 font-medium text-[${props.colors.text}] transition-all duration-200 focus:text-opacity-70 ${location.pathname != "/calculator" ? "active" : ""}`}> Calculator </a>
                        </nav>

                        <div className="flex flex-col items-start">
                            <a 
                                onClick={props.toggleTheme} 
                                href="#" 
                                title="" 
                                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" 
                                role="button"
                            >
                                {props.isDarkMode ?
                                    <svg id="theme-toggle-light-icon" className=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                                    </svg> 
                                    : 
                                    <svg id="theme-toggle-dark-icon" className=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                    </svg>
                                }
                            </a>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
