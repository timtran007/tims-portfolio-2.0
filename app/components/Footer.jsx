import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer border-2 border-top-[#33353F] border-l-transparent border-r-transparent border-b-transparent">
        <div className="py-6 px-12 flex justify-between items-center">
            <Link href={"/"} className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-blue-400 to-pink-500">
              TT
            </Link>
            <p className="text-slate-600">{`All Rights Reserved.`}</p>
        </div>
    </footer>
  )
}
