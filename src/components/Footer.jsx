import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="mt-2 p-3 flex justify-between">
        <div className="font-CG  text-7xl ml-5 text-[#1890d7] p-3">Hunza</div>
        <div className='flex flex-col justify-end mb-4 text-[#1890d7] text-end'>
            <div>
                <p className='text-lg font-light'>+9231-6498024</p>
                <p className='text-lg mb-2 font-light'>contact@hunza.com</p>
                <p className='text-sm font-light'>@Copyright 2023</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer