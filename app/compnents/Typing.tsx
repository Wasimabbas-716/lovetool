import React from 'react'

const Typing = () => {
  return (
 
   <>
     {/* typing... */ }
<div className="flex flex-row gap-2">
    <div className="w-4 h-4 rounded-full bg-blue-300 animate-pulse [animation-duration:.7s] [animation-delay:0s]"></div>
    <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse [animation-duration:.7s] [animation-delay:.2s]"></div>
    <div className="w-4 h-4 rounded-full bg-blue-700 animate-pulse [animation-duration:.7s] [animation-delay:.4s]"></div>
</div>
</>
  )
}

export default Typing