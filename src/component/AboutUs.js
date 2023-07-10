import React from 'react'

function AboutUs() {
  return (
    <div className='mb-12'>
        <div><p className="text-green font-bold text-xl flex justify-center item-center    ">About Us</p></div>
        <div className='grid grid-cols-2 gap-4  mx-44 p-8' >
        
        {/* for text */}
        <div className='mt-12  font-medium text-gray-600'> 
        <p>Welcome to our e-commerce website! We are dedicated to providing you with a seamless online shopping experience.
             With a wide range of products available at your fingertips, we aim to cater to all your needs. Our user-friendly interface ensures easy navigation, allowing you to browse through our extensive collection effortlessly. We pride ourselves on delivering top-quality products from trusted brands, carefully curated to meet your preferences. Customer satisfaction is our utmost priority, and our dedicated support team is always ready to assist you with any queries or concerns. 
            We prioritize secure transactions, employing the latest encryption technology to safeguard your personal information</p>
        </div>
        {/* for image */}
        <div>
           <img src='img2.png' className='h-96'></img> 
        </div>
        </div>
    </div>
  )
}

export default AboutUs