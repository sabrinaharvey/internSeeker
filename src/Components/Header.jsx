import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'


const Header = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    handleSearch(e.target.value);
    setSearchTerm(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);

    const jobListingsElement = document.getElementById('jobListings');
    if (jobListingsElement) {
      jobListingsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='header bg-[#f4f4f4]'>
        <div className='navbar px-9 py-3'>
          <h3  className='font-semibold'>Intern<span className='font-normal'>Seeker</span></h3>
        </div>
        <div className='hero text-center flex items-center justify-center flex-col pb-6'>
            <h1 className='font-bold text-[40px] font-[Poppins] w-[45%]  pt-[2rem] text-[#000]'>Find an <span className='text-[#0E847C]'>internship</span> and start your career!</h1>
            <p className='font-[Inter] w-[40%] font-medium pt-2 text-[#292929]'>Avoid endless internet searches and discover internships here on InternSeeker.</p>
            <form onSubmit={handleClick} action='' className='pl-11 mt-5'>
              <div className='w-[460px] flex items-center rounded-[2rem] bg-white p-[10px] border-[#0E847C] border-2 drop-shadow-lg'>
                <span className='pr-3 text-[#0E847C] font-bold'><FaSearch/></span>
                <input type='text' onChange={handleChange} className='bg-transparent flex-1 border-none outline-none' placeholder='Search Job'/>
              </div>
            </form>
          </div>
        <div>
      </div>
    </div>
  )
}

export default Header