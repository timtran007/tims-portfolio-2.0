'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon"
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon"

const navLinks = [
    {title: 'About', href: '/#about'},
    {title: 'Skills', href: '/#skills'},
    {title: 'Projects', href: '/#projects'},
    {title: 'Contact', href: '/#contact'}
]

function Navbar() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    const handleMenuClick = () => {
        setIsMobileNavOpen(!isMobileNavOpen)
    }
    console.log('isMobileNavOpen', isMobileNavOpen)

    return (
        <nav className={`fixed top-0 left-0 right-0 z-10 bg-[#121212] ${isMobileNavOpen ? 'bg-opacity-100' : 'bg-opacity-90'}`}>
            <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-8">
                <Link href={"/"} className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-blue-400 to-pink-500">
                    TT
                </Link>
                <div className="mobileMenu block md:hidden">
                    {isMobileNavOpen ?
                        <button
                            onClick={() => handleMenuClick()}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                        <XMarkIcon className="h-5 w-5" />
                        </button> :
                        <button 
                            onClick={() => handleMenuClick()}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>                        
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks && navLinks.map( link => (
                                <li key={link.title}>
                                    <NavLink href={link.href} title={link.title}/>
                                </li> 
                            )
                        )}
                    </ul>
                </div>
            </div>
            {isMobileNavOpen ? 
                <MenuOverlay links={navLinks}/> :
                ''
            }
        </nav>
    )
}

export default Navbar