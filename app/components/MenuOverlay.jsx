import React from 'react'
import NavLink from './NavLink'

export default function MenuOverlay({ links, onHandleLinkClick }) {
    return (
        <ul className='flex flex-col pb-6 items-center'>
            {links && links.map( link => (
                <li key={link.title}>
                    <NavLink href={link.href} title={link.title} onHandleLinkClick={onHandleLinkClick}/>
                </li>
            ))}
        </ul>
    )
}