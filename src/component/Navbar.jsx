import React from 'react'
import { MoveUpRight } from 'lucide-react';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6 py-7 font-serif'>
        <h2 className='  font-bold text-4xl'>Horizon Courts</h2>
        <h4 className='border border-gray-400 rounded-full h-10 w-20  flex items-center justify-center '>About us </h4>
        <h4>Sources</h4>
        <h4>Coaches</h4>
        <h4>Events</h4>
        <h4>Contacts</h4>
        <button className='bg-black text-white h-10 w-40 rounded-full flex items-center gap-3 justify-center'>Book now<MoveUpRight /></button>
        
    </div>
  )
}

export default Navbar