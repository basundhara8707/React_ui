import React from 'react'
import{MoveUpRight} from 'lucide-react'

const Social = () => {
  return (
   <div  className='absolute  bottom-10 text-2xl right-10 flex gap-4  text-white '> <h2  className='flex items-center gap-1'>tik tok<MoveUpRight strokeWidth={1.25} /></h2>
      <h2 className='flex items-center gap-1'>instagram <MoveUpRight strokeWidth={1.25} /></h2>
      <h2 className='flex items-center gap-1'>Facebook <MoveUpRight strokeWidth={1.25} /></h2></div>
  )
}

export default Social