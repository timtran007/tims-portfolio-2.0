import React from 'react'

export default function TabButton({ active, selectTab, children}) {
    const buttonClasses = active ? 
    'font-semibold text-[#1f1f1f] hover:text-black dark:text-[#ADB7BE] dark:hover:text-white border-b border-blue-300': 
    'text-[#1f1f1f] hover:text-black dark:text-[#ADB7BE] dark:hover:text-white'
  return (
    <button 
        onClick={selectTab}
    >
        <p className={"mr-3 " + buttonClasses}>
            {children}
        </p>
    </button>
  )
}
