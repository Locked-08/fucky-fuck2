import { useState } from "react"
import beam from "/bbb2.png"
export default function Header() {
    const [showNav, setShowNav] = useState(false)
    function toggleNav() {
        setShowNav(!showNav)
    }
    return (
        <div className='bg-blue-900 text-white'>
            <div className='bg-blue-800 text-white flex py-5 justify-between text-xl font-bold '>
                <div className='tits px-3 py-3'>Electric scooter</div>
                <img src={beam} className="w-[50px]" onClick={toggleNav} />
            </div>
            {showNav && <div className='md:flex text-center'>
                <div className='tits px-3 py-3'>Home</div>
                <div className='tits px-3 py-3'>About</div>
                <div className='tits px-3 py-3'>Contact</div>
                <div className='tits px-3 py-3'>Our top three</div>
                <div className='tits px-3 py-3'>Best in their class</div>
            </div>}
        </div >)
}