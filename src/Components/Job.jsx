import React, { useState, useEffect } from 'react';

import {BiTimeFive} from 'react-icons/bi'


const Job = ({ search }) => {
  const [jobs, setJobs] = useState([
    //list of job listings
    {
      id: 1,
      title: 'Software Engineer',
      location : 'Kingston',
      time: '2 Months',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat beatae laboriosam.',
      company: 'Jamaica National Bank'
    },
  
    {
      id: 2,
      title: "Web Designer",
      location: 'Kingston',
      time: '1 Month',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat beatae laboriosam.',
      company: 'National Commercial Bank'
    },
  
    {
      id: 3,
      title: 'Data Scientist',
      location: 'St. Catherine',
      time: '6 Months',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat beatae laboriosam.',
      company: 'National Water Commission'
    },
  
    {
      id: 4,
      title: 'Junior Web Developer',
      location: 'Manchester',
      time: '1 Year',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat beatae laboriosam.',
      company: 'ScotiaBank'
    },
  
    {
      id: 5,
      title: 'Java Engineer',
      location: 'Kingston',
      time: '4 Months',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat beatae laboriosam.',
      company: 'Grid Dynamics'
    },
  
    {
      id: 6,
      title: 'Junior UI Engineer',
      location: 'Kingston',
      time: '6 Months',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat beatae laboriosam.',
      company: 'Grid Dynamics'
    },
  
    {
      id: 7,
      title: 'Sales Intern',
      location: 'St. Andrew',
      time: '1 Year',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat beatae laboriosam.',
      company: 'VMBS'
    },
  
    {
      id: 8,
      title: 'Junior PR Specialist',
      location: 'St. Catherine',
      time: '2 Months',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat beatae laboriosam.',
      company: 'Barita'
    },
  ]);

  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [search, jobs]);

  return(
    <div>
      <div id="jobListings" className='jobContainer flex items-center justify-center flex-wrap py-10 min-h-screen bg-[#f5fbfb]'>
        {
          filteredJobs.map(({id,title,company,desc,location,time}) => {
            return (
              <div key={id} className='group w-[250px] p-[20px] bg-white rounded-[10px] shadow-lg m-3 transition ease-in-out duration-300 hover:scale-110 hover:cursor-pointer hover:shadow-lg'>
                <h1 className='text-[10px] font-semibold text-[#0E8179]'>{title}</h1>
                <h6 className='text-[8px] font-medium text-[#ccc] gap-1'>{company}</h6>
                <p className='text-[8px] pt-[20px] border-t-[2px]'>{desc}</p>
                  <h6 className='text-[10px] pt-2 font-semibold'>{location}</h6>
                  <span className='items-center justify-center text-[#ccc] gap-1 inline-flex'>
                    <BiTimeFive/>{time}
                  </span>
                <button className='btn w-full mt-1 border-[2px] rounded-[5px] p-1 text-white bg-[#0E8179] border-[#0a5c56]'>Learn More</button>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Job