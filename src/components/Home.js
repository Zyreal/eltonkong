import React from 'react'
import profile from '../images/profile.jpg'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <div>
            {/* lg for large screens */}
            <motion.div 
            initial={{x: '-100%'}}
            animate={{x: 0}}
            transition={{duration: 1.3, bounce:0.3, type:'spring'}}
            className='flex flex-col items-center justify-center'>
                <h1 className='text-black text-center mt-56 font-bold heading-one leading-none lg:leading-snug name-size'>Elton Kong</h1>
                <img src={profile} alt='profile' className=' mb-28 rounded-full object-center w-32'  />
            </motion.div>
            <motion.div
            whileInView={{opacity: [0,1]}}
            animate={{duration: 1}}
            className='border-black border-b-2'></motion.div>
            <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 1}}
            viewport={{once: true}}
            className='w-1/2 m-auto mt-20 flex-col pt-16 pb-48'>
                <h2 className='text-5xl text-center mb-5 font-bold heading-one '> About me</h2>
                <p className='text-4xl pt-5 border-t-2 border-black heading-two text-center'>I am currently pursuing a degree in Computer Science at Carleton University. I enjoy programming and am currently learning the ins and outs of full stack development. Please check my projects for some of the work I have done so far!</p>
            </motion.div>
        </div>
    )
}
