import React from 'react'
import { motion } from 'framer-motion'

export default function TabButton({ active, selectTab, children}) {
    const variants = {
      default: { width: 0 },
      active: { width: 'calc(100% - 0.75rem' }
    }
    const buttonClasses = active ? 
    'font-semibold text-[#1f1f1f] hover:text-black dark:text-[#ADB7BE] dark:hover:text-white': 
    'text-[#1f1f1f] hover:text-black dark:text-[#ADB7BE] dark:hover:text-white'
  return (
    <button 
        onClick={selectTab}
    >
        <p className={"mr-3 " + buttonClasses}>
            {children}
        </p>
        <motion.div
            animate={active ? 'active' : 'default'}
            variants={variants}
            className='h-1 bg-gradient-to-tl from-green-500 via-blue-400 to-pink-500 mr-3 mt-2'
        >
        </motion.div>
    </button>
  )
}
