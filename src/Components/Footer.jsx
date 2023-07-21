import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='flex items-center justify-center bg-[#0E8179] p-9 gap-14'>
      <div>
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-white'>
            <strong>Intern</strong>Seeker
          </h1>
        </div>

        <p className='text-white pb-[13px] opacity-70 w-[60%] '>
          We are dedicated to helping students begin their career as hassle free as possible.
        </p>
        <div className='flex gap-5 items-center'>
          <AiFillInstagram className='text-[25px] text-white'/>
          <AiFillLinkedin className='text-[25px] text-white'/>
          <AiFillFacebook className='text-[25px] text-white'/>
        
        </div>

        <div className=' copyright font-medium text-white text-[10px] opacity-70 my-5'>
             &copy; <strong>2023</strong> Sabrina Harvey
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>

        <div className='grid gap-3'> 
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support
        </span>

        <div className='grid gap-3'> 
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
        </div>
      </div>
    </div>
  )
}

export default Footer