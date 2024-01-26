"use client"
import React, { useState } from 'react'
import gitHubIcon from '../../public/images/github-icon.svg'
import linkedinIcon from '../../public/images/linkedin-icon.svg'
import blogIcon from '../../public/images/blog-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function EmailSection() {
    const initialForm = {
        email: '',
        subject: '',
        message: ''
    }
    const [form, setForm] = useState(initialForm)
    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [key]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        if (response.status === 200) {
            console.log('Message Sent')
            setEmailSubmitted(true)
            setForm(initialForm)
        } 
    }

    return (
        <section className='grid md:grid-cols-2 my-12 md:my12 py-12 gap-4'>
            <div>
                <h5 className='text-xl font-bold my-2'>
                    Let&apos;s connect.
                </h5>
                <p className='mb-4 max-w-md'>
                    I am always going to be interested in a cool projects. My inbox is open. Whether you want to work on something together or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://www.github.com/timtran007">
                        <Image src={gitHubIcon} alt="github icon" width={30} height={30} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/tim-tran">
                        <Image src={linkedinIcon} alt="linkedin icon" width={30} height={30} />
                    </Link>
                    <Link href="https://dev.to/timtran007">
                        <Image src={blogIcon} alt="blog icon" width={30} height={20} />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label 
                            htmlFor='email' 
                            className="block text-sm mb-2 font-medium"
                        >
                            Email
                        </label>
                        <input
                            name="email"
                            type="email" 
                            id="email" 
                            required
                            onChange={handleChange}
                            className="dark:bg-[#18191E] border border=[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="LetsChat@gmail.com"
                            value={form.email}
                            />
                    </div>
                    <div className='mb-6'>
                        <label 
                            htmlFor='subject' 
                            className="block text-sm mb-2 font-medium"
                            >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text" 
                            id="subject" 
                            onChange={handleChange}
                            className="dark:bg-[#18191E] border border=[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="So... What do you want to talk about?"
                            value={form.subject}
                            />
                    </div>
                    <div className='mb-6'>
                        <label 
                            htmlFor='message' 
                            className="block text-sm mb-2 font-medium"
                            >
                            Message
                        </label>
                        <textarea
                            name="message" 
                            id="message" 
                            onChange={handleChange}
                            className="dark:bg-[#18191E] border border=[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Give me the details..."
                            value={form.message}
                            />
                    </div>
                    <button
                        type='submit'
                        className='bg-gradient-to-br from-green-500 via-blue-400 to-pink-500 hover:from-pink-400 hover:via-blue-500 hover:to-green-400 text-white py-2.5 font-semibold text-sm rounded-md w-full'
                    >
                        Send Message
                    </button>
                    {emailSubmitted && (
                        <p className="mt-2 text-sm text-green-500">
                            Thanks for successfully submitting the form! The ball is in my court now. I&apos;ll get back to you as soon as I can.
                        </p>
                    )}
                </form>
            </div>
        </section>
  )
}
