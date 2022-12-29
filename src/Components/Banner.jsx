import React from 'react'

function Banner() {
  return (
    <div className='bg-black'>
        <div className='h-[450px] relative text-white object-contain max-w-[100rem] mx-auto'>
        <div className='text-left pt-[140px] h-[150px]'>
            <h1 className='text-6xl pb-2 font-black font-serif'>Stranger Things</h1>
            <p>When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.</p>
            <div className='flex space-x-3 mt-4'>
                <button className='bg-white text-gray-700 px-6 py-1 font-bold'>Play</button>
                <button className='bg-gray-800 px-6 py-1 font-bold'>My list</button>
            </div>

        </div>

        </div>

    </div>
  )
}

export default Banner