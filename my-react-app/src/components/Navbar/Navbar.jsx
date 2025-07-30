import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';



const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect (() => {
      window.addEventListener('scroll', () =>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false)
         })
  },[]);

  return (
    
    <nav className={`w-full text-white font-outfit py-[4px] fixed top-0 left-0 flex items-center justify-between z-10 pl-[10%] pr-[10%] ${sticky ? 'bg-title transition-all duration-500 ease-in-out' : ''}`}>

        
        <img src={logo} alt="logo" className='md:w-[180px] w-[150px] py-[12px]'/>
        
         {/* Hamburger buton (mobil) */}
      <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-3xl'>
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

        <ul className='hidden md:flex py-[12px]'>
            <li className='inline-block my-[5px] mx-[20px] text-md '> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>

            <li className='inline-block my-[5px] mx-[20px] text-md'><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>

            <li className='inline-block my-[5px] mx-[20px] text-md'><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>

            <li className='inline-block my-[5px] mx-[20px] text-md'><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>

            <li className='inline-block my-[5px] mx-[20px] text-md'><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>

            <li className='inline-block my-[5px] mx-[20px] text-md'><Link className='bg-white text-black py-[14px] px-[25px] rounded-full cursor:pointer' to='contact' smooth={true} offset={-260} duration={500} >Contact Us</Link></li>
        </ul>

    {/* Sağdan Açılan Mobil Menü (Alt Alta Linklerle) */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-[40%] bg-title z-10 p-8 transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <button 
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
      >
        &times;
      </button>

  <ul className="flex flex-col space-y-8">
    <li className='text-md pt-[15px]'>
      <Link to='hero' smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>Home</Link>
    </li>

    <li className='text-md'>
      <Link to='program' smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Program</Link>
    </li>

    <li className='text-md'>
      <Link to='about' smooth={true} offset={-150} duration={500} onClick={() => setMenuOpen(false)}>About Us</Link>
    </li>

    <li className='text-md'>
      <Link to='campus' smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Campus</Link>
    </li>

    <li className='text-md'>
      <Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Testimonials</Link>
    </li>

    <li className='text-md'>
      <Link className='bg-white text-black py-[14px] px-[15px] ml-[-12px] rounded-full cursor:pointer' to='contact' smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Contact Us</Link>
    </li>
  </ul>
</div>


    </nav>
    
  )
}

export default Navbar