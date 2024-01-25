import React from 'react'
import Link from 'next/link'
import CodeBracketIcon from "@heroicons/react/24/outline/CodeBracketIcon"
import EyeIcon from "@heroicons/react/24/outline/EyeIcon"


export default function ProjectCard({ imgURL, title, description, techStack, externalLink, gitURL }) {
    return (
        <div className="flex flex-col h-full shadow-md shadow-gray-400">
            <div
                className='flex-shrink-0 h-52 md:h-72 rounded-t-xl relative group'
                style={{ background: `url(${imgURL})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
                <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500">
                    {gitURL && <Link target='_blank'
                        href={gitURL ? gitURL : '#'}
                        className="mr-2 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 absolute text-[#ADB7BE] group-hover/link:text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"/>
                    </Link>}
                    {externalLink && <Link target='_blank'
                        href={externalLink ? externalLink : '#'}
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <EyeIcon className="h-10 w-10 absolute text-[#ADB7BE] group-hover/link:text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"/>
                    </Link>}
                </div>
            </div>
            <div className='rounded-b-xl py-6 px-4 bg-[#fafafa] dark:bg-[#181818] flex-grow'>
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p>{description}</p>
                <p className="mt-3 font-medium">{techStack}</p>
            </div>
        </div>
    )
}
