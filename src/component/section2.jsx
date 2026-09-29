import React from 'react'
import Cards from './Cards'
import Text from './text'
import Numbers from './numbers'

const Section2 = () => {
  return (
    <div className='h-screen w-full'>  <div className='h-80 w-full ml-10  rounded-2xl p-2.5 flex flex-row gap-10'>
    <Cards />
   
     </div>
     <div className='flex flex-col gap-15 font-serif '>
     <Text />
     <Numbers />
     </div></div>

  )
}

export default Section2