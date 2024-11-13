import { useEffect, useState } from "react"
import beam from "/bbb2.png"
import { NavLink } from "react-router-dom";
export default function Header() {
    const [showNav, setShowNav] = useState(false)
    function toggleNav() {
        setShowNav(!showNav)
    }
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 720) {
                setShowNav(true)
            } else {
                setShowNav(false);
            }
        };

        handleResize(); //Intial
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className='bg-blue-800 text-white md:flex md:justify-between fixed top-0 left-0 w-screen px-7 z-50'>
            <div className='bg-blue-800 text-white flex py-10 justify-between text-xl font-bold '>
                <NavLink to="/" className='tits px-3 py-3'>Electric scooter</NavLink>
                <img src={beam} className="w-[50px] md:hidden" onClick={toggleNav} />
            </div>
            {showNav && <div className='md:flex text-center font-bold'>
                <div className='tits px-3 py-3 md:pt-14'>Home</div>
                <NavLink to="/About" className='tits px-3 py-3 md:pt-14'>About</NavLink>
                <div className='tits px-3 py-3 md:pt-14'>Contact</div>
                <NavLink to="/T3" className='tits px-3 py-3 md:pt-14'>Our top three</NavLink>
                <div className='tits px-3 py-3 md:pt-14'>Best in their class</div>
            </div>}
        </div >)
}