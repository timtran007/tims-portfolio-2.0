"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import computerImage from '../../public/images/computer-image.jpg'
import TabButton from './TabButton'

const aboutMeData = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-4'>
                <li>ReactJS</li>
                <li>JavaScript</li>
                <li>Material UI</li>
                <li>Rails</li>
                <li>Active Record</li>
                <li>PostgreSQL</li>
            </ul>
        )
    },
    {
        title: 'Experiences',
        id: 'experiences',
        content: (
            <ul className='list-disc pl-4'>
                <li>Software Dev. @ Clarity Consulting Corp. (current/PT)</li>
                <li>Jr. Web Dev. @ Served With Honor (current)</li>
                <li>Freelance Dev. @ Upwork (current / PT)</li>
                <li>Fullstack Dev. @ The Be Good Project</li>
                <li>Product Mktg Mgr. @ Flatiron School</li>
                <li>Performance Mktg Mgr. @ Fourlane</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-4'>
                <li>Flatiron School - Fullstack Software Engineering</li>
                <li>Sam Houston State University - BA, History</li>
            </ul>
        )
    
    }
]
export default function AboutSection() {
    const [aboutMeTab, setAboutMeTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setAboutMeTab(id)
        })
    }
    return (
        <section id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src={computerImage} alt="computer image" width={600} height={600} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                        I am a driven fullstack developer leveraging a background in marketing to provide unique perspectives on how users interact with websites and software platforms. I love solving interesting and challenging problems utilizing the skills I have developed over the years. 
                    </p>
                    <div className="flex flex-row mt-8 text-base md:text-lg">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={aboutMeTab === "skills"}
                        >
                            {" "}
                            Skills {""}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("experiences")} 
                            active={aboutMeTab === "experiences"}
                        >
                            {" "}
                            Experiences {""}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={aboutMeTab === "education"}
                        >
                            {" "}
                            Education {""}
                        </TabButton> 
                    </div>
                    <div className='mt-4 font-light'>
                        {aboutMeData.find( tab => tab.id === aboutMeTab).content}
                    </div>
                </div>
            </div>
        </section>
    )
  }