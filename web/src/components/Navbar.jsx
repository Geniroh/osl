import { useEffect, useState, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activePage, setActivePage] = useState("/")
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setActivePage(location.pathname)

        const handleScroll = () => {
            const offset = 200;
            setIsSticky(window.scrollY > offset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

  return (
    <>
        <div className={`w-full h-[90px] md:h-[100px] flex items-center z-20 ${isSticky ? 'bg-[#232B38] fixed top-0 w-full' : 'bg-transparent'}`}>
            <div className="flex justify-between items-center w-full px-4 md:px-8">
                <div>
                    <Link to='/' replace>
                        <img src="/img/logo.png" alt="logo" className="w-[300px] md:w-[250px]" />
                    </Link>
                </div>
                <div className="w-full flex justify-end">
                    <IoMenu color="#fff" className="text-white text-4xl cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)} />
                    <ul className="list-none gap-12 items-center hidden md:flex justify-between font-[500]">
                        <li className={`${activePage == '/' ? 'text-secondary': 'text-white'} hover:text-secondary`}><Link to="/">Home</Link></li>
                        <li  className={`${activePage == '/about' ? 'text-secondary': 'text-white'} hover:text-secondary`}><Link to="/about">About</Link></li>
                        <li  className={`${activePage == '/contact' ? 'text-secondary': 'text-white'} hover:text-secondary`}><Link to="/contact">Contact</Link></li>
                        {
                            (activePage == '/' || activePage =='/about' || activePage =='/contact' || activePage == '/gallery') &&

                            // <button onClick={handleBookNow}><li className="px-4 py-3 bg-white text-[#2A2A2A] hover:bg-secondary cursor-pointer">Book Now!</li></button>
                            <Link to="/booking"><li className="px-4 py-3 bg-white text-[#2A2A2A] hover:bg-secondary cursor-pointer">Book Now!</li></Link>
                        }
                    </ul>
                </div>
            </div>
        </div>

        { isOpen && <div className="fixed inset-0 bg-[#D9E0E8] opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} ></div> }
        <div className={`fixed inset-y-0 right-0 w-72 bg-white text-[#1F252E] z-50 transition-transform duration-300 transform md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                ref={sidebarRef}>
                <div className="flex justify-between p-4 h-[100px] items-center">
                    <img src="/img/logo2.png" className="w-[160px] object-contain" alt="" />
                    <button className="text-[#1F252E]" onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="">
                    <ul>
                        <li className="border-t border-[#1F252E]/20 px-4 py-3">
                            <Link to="/" className="block  hover:text-secondary">Home</Link>
                        </li>
                        <li className="border-t border-[#1F252E]/20 px-4 py-3">
                            <Link to="/about" className="block  hover:text-secondary">About</Link>
                        </li>
                        <li className="border-y border-[#1F252E]/20 px-4 py-3">
                            <Link to="/contact" className="block  hover:text-secondary">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    </>
  );
};

export default Navbar;