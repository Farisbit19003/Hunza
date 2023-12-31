import React from "react";

const Register = () => {
  return (
    <>
      <div className="p-2">
        <h1 className="font-CG md:text-7xl text-4xl whitespace-nowrap font-semibold text-[#1890d7]">
          Find Yourself in Hunza
        </h1>

        <div className="my-5">
          <h2 className="font-epi mb-3 md:font-medium font-light text-3xl text-[#1890d7]">
            Register Your Interest
          </h2>
          <div className="flex flex-col gap:4  font-epi sm:w-1/3 p-2">
            <input
              type="text"
              placeholder="Name"
              className="text-[#1890d7] bg-[#F6FBFE] placeholder:text-[#1890d7]  p-2  border-b-2 border-[#1890d7] outline-none focus:ring-2 focus:ring-[#1890d7]"
            />
            <input
              type="tel"
              placeholder="Number"
              className="text-[#1890d7] bg-[#F6FBFE] placeholder:text-[#1890d7] p-2  border-b-2 border-[#1890d7] outline-none focus:ring-2 focus:ring-[#1890d7]"
            />
            <input
              type="email"
              placeholder="Email"
              className="text-[#1890d7] bg-[#F6FBFE] placeholder:text-[#1890d7]  p-2  border-b-2 border-[#1890d7] outline-none focus:ring-2 focus:ring-[#1890d7]"
            />
             <div className="flex justify-end my-2">
            <button type="submit" className="text-[#1890d7] underline font-semibold text-lg transition-transform hover:scale-95">Submit</button>
          </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Register;
