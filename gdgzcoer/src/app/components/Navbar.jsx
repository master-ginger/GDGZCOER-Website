/*
    Author :- Prathamesh Kothalkar
*/

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="w-full h-16 flex justify-between items-center px-6 shadow-md bg-slate-300 bg-opacity-40 z-20 scroll-smooth backdrop-blur-md text-black top-0 left-0 right-0 sticky">
  <div className="flex items-center">
    <Image
      src="/gdgLogo.png"
      alt="Logo"
      width={40}
      height={40}
      className="mr-2 rounded-full"
    />
  </div>

  <div className="sm:hidden">
    <button
      onClick={toggleSidebar}
      aria-label="Toggle Sidebar"
      className="p-2 rounded hover:shadow-md hover:shadow-black "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16m-4 6h4"
        />
      </svg>
    </button>
  </div>

  <div className="hidden sm:flex space-x-8 text-lg">
    <Link href="/" className="hover:text-blue-400 transition-colors">
      Home
    </Link>
    <a href="#" className="hover:text-blue-400 transition-colors">
      Team
    </a>
    <Link href="/events" className="hover:text-blue-400 transition-colors">
      Events
    </Link>
    <a href="#" className="hover:text-blue-400 transition-colors">
      About
    </a>
    <a href="#" className="hover:text-blue-400 transition-colors">
      Blogs
    </a>
    <a href="#" className="hover:text-blue-400 transition-colors">
      Contact Us
    </a>
  </div>
</nav>


      <div
        className={`fixed top-0 left-0 h-full w-72 shadow-md bg-slate-300 bg-opacity-40 z-20 backdrop-blur-md text-black transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <button
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
          className="absolute top-4 right-4 p-2 rounded hover:shadow-md hover:shadow-black "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col items-start p-6 space-y-6 text-lg h-100vh">
          <Image
            src="/gdgLogo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2 rounded-full"
          />
          <Link href="/" className="hover:text-blue-400 transition-colors mt-4">
            Home
          </Link>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Team
          </a>
          <Link href="/events" className="hover:text-blue-400 transition-colors">
            Events
          </Link>
          <a href="#" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Blogs
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Contact Us
          </a>
        </nav>
      </div>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-0 sm:hidden"
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Navbar;
