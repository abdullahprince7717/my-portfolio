import { MdOutlineMenu } from "react-icons/md";

function Navbar() {
    return (
        <div className="flex justify-between mb-10">
            <p className='capitalize font-semibold text-lg'>Abdullah Ali</p>
            <MdOutlineMenu color="#fff" />
        </div>
    )
}

export default Navbar