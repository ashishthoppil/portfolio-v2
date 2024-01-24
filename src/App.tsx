import { useState } from 'react'
import './App.css'
import { Header } from './components/layout/Header'
import { motion } from "framer-motion"

function App() {

  return (
    <>
      <Header />
      <div  className='h-screen grid grid-cols-2 px-[5rem] items-center'>
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 2.5 }}
         className='grid gap-[5rem]'>
          <h1 className='text-9xl'>Hey there!</h1>
          <h3 className='text-7xl'>I'm Ashish, a Frontend Developer.</h3>
        </motion.div>
        <div className=''>
        
          
        </div>
      </div>
    </>
  )
}

export default App
