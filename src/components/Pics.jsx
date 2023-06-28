import React from 'react'

const Pics = () => {
  return (
    <>
      <div className="flex flex-col p-3 my-2">
        <div className="flex justify-start">
          <img src="Rect.svg" alt="junza" className="rounded-lg shadow-xl" />
        </div>
        <div className="flex flex-col  ">
          <div className="flex lg:justify-start  w-fit">
            <p className="font-epi  lg:w-2/6 p-5 mt-10 text-xl md:text-3xl text-[#1890d7]">
              Hunza is also committed to sustainable and eco-friendly practices,
              making it an ideal destination for wellness travelers seeking a
              peaceful and rejuvenating experience.
            </p>
          </div>

          <div className="flex justify-end lg:-mt-20">
            <img src="angle.svg" alt="hunza" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pics