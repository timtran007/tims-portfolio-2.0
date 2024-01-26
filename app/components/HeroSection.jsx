'use client'
import React from 'react'
import Image from 'next/image'
import timsPic from '../../public/images/tims-profile-pic.jpg'
import { TypeAnimation } from 'react-type-animation'


export default function HeroSection() {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-blue-400 to-pink-500'>
                        Hello, I&apos;m{' '}    
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Tim',
                            1000,
                            'a Fullstack Developer',
                            1000,
                            'a Frontend Developer',
                            1000,
                            'a React Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={25}
                        repeat={Infinity}
                        style={{ fontSize: '.75em', display: 'inline-block'}}
                    />
                </h1>
                <p className='text-base sm:text-lg mb-2 lg:text-xl'>
                    With keen attention to detail and a passion for exploring best practices to help shape quality code, I love solving interesting problems with technology.
                </p>
                <div>
                    <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-2 my-4 bg-gradient-to-br text-white from-green-700 via-blue-400 to-pink-700 hover:from-pink-800 hover:via-blue-500 hover:to-green-800 transition-all duration-800'>
                        Let&apos;s Talk
                    </button>
                    <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-green-500 via-blue-300 to-pink-500 hover:from-pink-400 hover:via-blue-500 hover:to-green-400'>
                        <span className='block bg-white dark:bg-black w-full sm:w-fit rounded-full px-5 py-2'>
                            Download Resume
                        </span>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-12 lg:mt-0'>
                <div className='rounded-full shadow-white shadow-2xl w-[250px] mb-8'>
                    <Image
                        src={timsPic}
                        alt='hero image'
                        className='rounded-full'
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
  )
}