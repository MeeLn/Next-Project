'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Services() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* ---------------- NAVBAR ---------------- */}
      <nav className="w-full border-b border-gray-700 bg-gray-800/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 
            className="text-2xl font-bold text-indigo-400 cursor-pointer"
            onClick={() => router.push('/')}
          >
            Brand
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            <button onClick={() => router.push('/')} className="hover:text-indigo-400 transition">Home</button>
            <button onClick={() => router.push('/about')} className="hover:text-indigo-400 transition">About Us</button>
            <button onClick={() => router.push('/servicess')} className="hover:text-indigo-400 transition">Services</button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white transition"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>

      </nav>

      {/* ---------------- MOBILE SIDEBAR ---------------- */}
        <div className={`fixed top-0 right-0 h-full w-64 border-gray-900 bg-gray-800 shadow-xl transform transition-transform duration-300 z-50
                      ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button onClick={() => setSidebarOpen(false)} className="text-white text-2xl">✖</button>
            </div>

            {/* Menu items */}
            <div className="flex flex-col space-y-4 mt-0 text-lg px-6">
              <button onClick={() => router.push('/')} className="hover:text-indigo-400 transition text-left">Home</button>
              <button onClick={() => router.push('/about')} className="hover:text-indigo-400 transition text-left">About Us</button>
              <button onClick={() => router.push('/servicess')} className="hover:text-indigo-400 transition text-left">Services</button>
            </div>
        </div>

        {/* ---------------- OVERLAY ---------------- */}
        {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-gray-900/80 z-40"
              onClick={() => setSidebarOpen(false)}
            />
        )}


      {/* ---------------- HERO SECTION ---------------- */}
      <div className="flex flex-col items-center justify-center text-center px-6 mt-20">
        <h1 className="text-4xl font-bold mb-6 text-indigo-400">
          Services
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-gray-800 border border-gray-700 hover:border-indigo-400 hover:bg-gray-800/80 transition-all duration-300 shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">Web Development</h2>
            <p className="text-gray-300">
                We build responsive, modern, and high-performance websites tailored to your business needs.
            </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-gray-800 border border-gray-700 hover:border-indigo-400 hover:bg-gray-800/80 transition-all duration-300 shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">Mobile App Development</h2>
            <p className="text-gray-300">
                Create powerful mobile applications with smooth UI, secure backend, and excellent performance.
            </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-gray-800 border border-gray-700 hover:border-indigo-400 hover:bg-gray-800/80 transition-all duration-300 shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">UI / UX Design</h2>
            <p className="text-gray-300">
                Beautiful, user-friendly designs crafted for the best digital experiences.
            </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-gray-800 border border-gray-700 hover:border-indigo-400 hover:bg-gray-800/80 transition-all duration-300 shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">SEO & Marketing</h2>
            <p className="text-gray-300">
                Boost visibility, ranking, and conversions with powerful digital marketing strategies.
            </p>
            </div>

        </div>

        <button
          onClick={() => router.push('/Page1')}
          className="mt-10 bg-indigo-500 hover:border-indigo-400 hover:bg-indigo-600/80 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
          style={{ cursor: 'pointer' }}
        >
          Go to Page 1
        </button>
      </div>

    </div>
  )
}