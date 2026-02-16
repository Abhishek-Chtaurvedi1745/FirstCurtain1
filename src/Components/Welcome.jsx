import React from 'react'
import wl from '../assets/wl.jpg'
import wl1 from '../assets/wl1.jpg'
import wl2 from '../assets/wl2.jpg'

function Welcome() {
  return (
        <div 
  className="flex justify-center bg-cover bg-center bg-no-repeat" 
  style={{ backgroundImage: `url(/assets/abtbg.png)` }}
>
    <div className='flex justify-center m-0 xl:m-10'>
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 mt-5 w-[90%]">


<div className="flex gap-4">
  
 <img src={wl2} alt="" />

</div>



    {/* RIGHT : CONTENT */}
    <div className="text-left">
        <h2 className='font-bold text-4xl py-2'>Quality but Cheap Curtains in Singapore</h2>
      <p>
        We stock hundreds of quality fabrics and accessories for curtains and blinds, in a huge range of styles, colours and patterns, so you’re pretty much guaranteed to find just what you’re looking for.
      </p>
      <div className='mt-4'>
        <button className="bg-[#0383b3] py-[10px] px-[22px]
 outline-none text-white 
                   shadow-[5px_5px_0px_black] 
                   transition-all duration-300 ease-in-out
                   hover:bg-black
                   hover:shadow-[5px_5px_0px_#0383b3] 
                   ">
  Find Out More About Us
</button>

      </div>
    </div>

  </div>
</div>
</div>

  )
}

export default Welcome
