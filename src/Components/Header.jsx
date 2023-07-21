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
    <div className='header min-h-screen' style={{
          backgroundImage: 'url(src\/assets\/student2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
    }}>
        <div className='navbar px-9 py-3'>
          <h3  className='font-semibold'>Intern<span className='font-normal'>Seeker</span></h3>
        </div>
        <div className='hero'>
            <h1 className='font-bold text-[40px] font-[Poppins] w-[50%] pl-11 pt-[6rem] text-[#000]'>Find an <span className='text-[#0E847C]'>internship</span> and start your career!</h1>
            <p className='font-[Inter] w-[45%] font-medium pl-11 text-[#292929]'>Avoid endless internet searches and discover internships here on InternSeeker.</p>
            <form onSubmit={handleClick} action='' className='pl-11 mt-5'>
              <div className='w-[460px] flex items-center rounded-[10px] bg-white p-[10px]'>
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