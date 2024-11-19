import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-8 py-2 bg-primary border-b-2 border-[#3d3c3f25]">
        <a className="font-bold text-black" href="#" className="hover:text-white">Naveen MV</a>
        <nav className="hidden md:block">
            <ul className="flex text-white">
                <li><a href="#" className="hover:text-neutral-800 hover:border-b-2">Home</a></li>
                <li><a href="#" className="hover:text-neutral-800">About</a></li>
                <li><a href="#" className="hover:text-neutral-800">Project</a></li>
                <li><a href="#" className="hover:text-neutral-800">Contact</a></li>
            </ul>
        </nav>

        { toggleMenu && <nav className="block md:hidden ">
            <ul className="flex flex-col text-white mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden '><Bars3Icon className='text-white h-5'/></button>
    </header>
}