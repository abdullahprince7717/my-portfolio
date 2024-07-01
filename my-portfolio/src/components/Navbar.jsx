import { MdOutlineMenu, MdClose } from "react-icons/md";
import {useState} from 'react'

function Navbar() {
    const [nav, setNav] = useState(true);
    function toggleNavClick() {
        setNav(!nav)
    }
    return (
        <div>
            <div className="fixed top-0 w-full bg-[#0A192F] text-white flex justify-between min-h-14 pr-10 pt-3">
                <p className='capitalize font-semibold text-3xl'>Abdullah Ali</p>
                <div className="hidden md:!flex">
                    <a href="#hero" className="mx-5">Home</a>
                    <a href="#skills" className="mx-5">Skills</a>
                    <a href="#work" className="mx-5">Work</a>
                    <a href="#contact" className="mx-5">Contact</a>
                </div>
                {nav ? <MdClose onClick={toggleNavClick} className="text-white text-3xl md:hidden" /> : <MdOutlineMenu onClick={toggleNavClick} className="text-white text-3xl md:hidden" />}
                
            </div>
            {
                nav ? 
                <div className="md:hidden bg-[#0A192F] fixed top-14 w-full h-screen flex flex-col justify-center items-center gap-y-10">
                    <a href="#hero" >Home</a>
                    <a href="#skills" >Skills</a>
                    <a href="#work" >Work</a>
                    <a href="#contact" >Contact</a>
                </div> : ''
            }
        </div>
    )
}

export default Navbar