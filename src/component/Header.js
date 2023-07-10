import { motion } from "framer-motion"
// import img from '../assets/img7.png'
function Header() {
  return (
    <>
    <div className="  z-0  w-128 h-128  ">
    <div className=' grid grid-cols-2 '>
      {/* for description part */}
      <motion.div 
    //     initial={{x:'-100vw'}}
    //     animate={{x:0}}
    //    transition={{duration:4.5}}
      className="my-44 m-12 z-[-1]  ">
        <p 
        className="text-2xl font-bold mb-2  ">Your One-Stop Shop  <span className=" text-green-400 "> for Everything You Need</span></p>
        <p className="text-xl text-gray-500"> Explore our wide range of products, unbeatable deals, and exceptional customer service.
         Shop now and experience the convenience of online shopping like never before.</p>
          <div className="">
            <button className=" outline outline-1 bg-green px-10 rounded mt-4 py-2 mr-4 text-white">View Details</button>
            <button className=" border-2  bg-green px-10 rounded mt-4 py-2 text-white"> Shop Now</button>
          </div>
      </motion.div>
      {/* for image part */}
    <div>
     <img className="h-120"
     src='img.png' alt=""></img>
   </div>
    </div>
    </div>
    </>
  )
}

export default Header