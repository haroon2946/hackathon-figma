import React from 'react'
import Header from './components/header';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      
      <Header/>
  

      {/* Hero section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto flex justify-between items-center">

   

          {/* Hero text */}
          <div>
            <h1 className="text-5xl font-bold">IPhone 14 Pro</h1>
            <p className="mt-4 text-lg">
              Created to change everything for the better. For everyone.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 rounded-md">
              Shop Now
            </button>
          </div>
          {/* Hero image */}
          <div className="relative w-1/2">
          <img
  src="/images/Iphone Image.png"
  alt=""
  className="max-h-[500px] max-w-[400]"
  
  

    
/>

            
          </div>

        </div>

      </section>
    </div>
    
  )
}

export default Home;
