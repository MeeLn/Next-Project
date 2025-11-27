'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page1() {
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
          Page 1
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
        </p>

        <div className="flex flex-col items-center justify-center mb-10">
          <div className="bg-amber-400/10 border border-amber-400/20 rounded-2xl p-6"> 
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">Radio Option</h2>   
            <label
              className="mt-10 mb-10 px-6"
            >
              <div className="flex gap-x-4 rounded-2xl p-4 has-checked:bg-indigo-600">
                <input name="payment" type="radio" />
              <p className="font-semibold">
              Option 1
              </p>
              </div>
            </label>  
            <label
              className="mt-10 mb-10 px-6"
            >
              <div className="flex gap-x-4 rounded-2xl p-4 has-checked:bg-indigo-600">
                <input name="payment" type="radio" />
              <p className="font-semibold">
              OPtion 2
              </p>
              </div>
            </label>
          </div>
        </div>
      </div>
      {/* ---------------- FILE UPLOAD & BACK BUTTON ---------------- */}
      <div className="flex flex-col items-center justify-center space-y-6">
      <input
        type="file"
        className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
      />

      <fieldset aria-label="Choose a memory option">
        <div className="flex items-center justify-between">
          <div>RAM</div>
          <a href="#"> See performance specs </a>
        </div>
        <div className="mt-4 grid grid-cols-6 gap-2 pointer-coarse:mt-6 pointer-coarse:grid-cols-3 pointer-coarse:gap-4">
          <label className="p-2 pointer-coarse:p-4 has-checked:bg-indigo-600 rounded-lg">
            <input type="radio" name="memory-option" value="4 GB" className="sr-only" />
            <span>4 GB</span>
          </label>
          <label className="p-2 pointer-coarse:p-4 has-checked:bg-indigo-600 rounded-lg">
            <input type="radio" name="memory-option" value="8 GB" className="sr-only" />
            <span>8 GB</span>
          </label>
          <label className="p-2 pointer-coarse:p-4 has-checked:bg-indigo-600 rounded-lg">
            <input type="radio" name="memory-option" value="16 GB" className="sr-only" />
            <span>16 GB</span>
          </label>
          <label className="p-2 pointer-coarse:p-4 has-checked:bg-indigo-600 rounded-lg">
            <input type="radio" name="memory-option" value="32 GB" className="sr-only" />
            <span>32 GB</span>
          </label>
        </div>
      </fieldset>



      <button
        className="bg-indigo-500 hover:border-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-200"
        onClick={() => router.push('/')}
        style={{
          cursor: 'pointer'
        }}
      >
        Back to Home
      </button>
      </div>
    </div>
  )
}
