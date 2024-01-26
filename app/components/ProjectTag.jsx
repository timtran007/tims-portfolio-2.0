import React from 'react'

export default function ProjectTag({ tag, handleTagChange, isSelected}) {
    const buttonStyles = isSelected
        ? 'bg-gradient-to-br from-green-500 via-blue-400 to-pink-500 font-bold text-white'
        : 'text-[#ADB7BE] border-[#ADB7BE] hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white'
    return (
        <button 
            className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
            onClick={() => handleTagChange(tag)}
        >
            {tag}
        </button>
    )
}
