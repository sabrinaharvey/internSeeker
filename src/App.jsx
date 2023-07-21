import React, { useState } from 'react'
import Header from './Components/Header'
import Job from './Components/Job'
import Footer from './Components/Footer'


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  }; 

  return (
    <div>
      <Header handleSearch={handleSearch}/>
      <Job search={searchTerm} />
      <Footer />
    </div>
  )
}

export default App
