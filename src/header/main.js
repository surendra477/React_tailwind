import React from 'react'
import logo from '../imgs/logo-bookmark.svg'

import { AiOutlineMenu } from "react-icons/ai";
function Header() {
    return (
        <div className="font-Poppins">
            <header>
            
                <nav className="container flex items-center py-4 mt-4 sm:mt-12">
                    <div className="py-1"><img src={logo} alt="" /></div>
                    <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-purple uppercase text-xs">
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Pricing</li>
                        <li className="cursor-pointer">Contact</li>
                        <button className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">Login</button>
                    </ul>
                    <div className="flex sm:hidden flex-1 justify-end">
                        <AiOutlineMenu className="text-2xl"/>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
