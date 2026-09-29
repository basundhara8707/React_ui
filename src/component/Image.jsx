import React from 'react'
import {  MoveUpRight } from 'lucide-react';
import Heroimg from './heroimg';
import Textcontent from './textcontent';
import Social from './social';
const Image = () => {
  return (
    
    <div className='w-11/12  h-150  ml-20 rounded-4xl overflow-hidden relative  '>
      
      <Heroimg />
      <Textcontent />
      <Social />
    </div>

  )
}

export default Image