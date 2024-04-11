import React, { useState, useEffect, useRef } from 'react';
import { FaChevronUp } from "react-icons/fa6";

const ScrollToTop = () => {
    const [show, setShow] = useState(false);
    const scrollRef = useRef(null);

    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const handleScroll = () => {
            const offset = 200;
            setShow(window.scrollY > offset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (show) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [show]);

    return (
        <div ref={scrollRef}>
            {
                show && (
                    <button className={`bg-[#FFA903] p-3 rounded-lg fixed bottom-[10px] transition-transform duration-1000 transform right-[10px] shadow-2xl ${show ? 'translate-y-0' : 'translate-y-full'}`} onClick={handleToTop}>
                        <FaChevronUp className='text-white text-xl' />
                    </button>
                )
            }
        </div>
    );
}

export default ScrollToTop;
