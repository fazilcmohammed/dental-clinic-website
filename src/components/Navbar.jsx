import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-blue-50 rounded-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className='font-bold text-2xl'>TBQ</h1>
          
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-blue-900 font-semibold hover:text-blue-700">
            Home
          </a>
          <a href="#" className="text-blue-900 hover:text-blue-700">
            Services
          </a>
          <a href="#" className="text-blue-900 hover:text-blue-700">
            Blogs
          </a>
          <a href="#" className="text-blue-900 hover:text-blue-700">
            About
          </a>
          <a href="#" className="text-blue-900 hover:text-blue-700">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-blue-900 font-medium border border-blue-900 px-4 py-2 rounded hover:bg-blue-100">
            Sign In
          </button>
          <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar