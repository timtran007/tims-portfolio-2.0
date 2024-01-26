import React from 'react'
import gitHubIcon from '../../public/images/github-icon.svg'
import linkedinIcon from '../../public/images/linkedin-icon.svg'
import blogIcon from '../../public/images/blog-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function EmailSection() {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my12 py-12 gap-4'>
        {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 to-transparent rounded-full h-72 w-72 z-0 blur-lg absolute top-full -left-16 transform -translate-x-1/2 -translate-y-1/2">
        </div> */}
        <div className="z-10">
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
            <form className="flex flex-col">
                <div className='mb-6'>
                    <label 
                        htmlFor='email' 
                        className="block text-sm mb-2 font-medium"
                    >
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        required
                        className="dark:bg-[#18191E] border border=[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="LetsChat@gmail.com"
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
                        type="text" 
                        id="subject" 
                        required
                        className="dark:bg-[#18191E] border border=[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="So... What do you want to talk about?"
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
                        required
                        className="dark:bg-[#18191E] border border=[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Give me the details..."
                        />
                </div>
                <button
                    type='submit'
                    className='bg-gradient-to-br from-green-500 via-blue-400 to-pink-500 hover:from-pink-400 hover:via-blue-500 hover:to-green-400 text-white py-2.5 font-semibold text-sm rounded-md w-full'
                >
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}
