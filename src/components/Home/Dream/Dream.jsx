import React from "react";

const Dream = () => {
  return (
    <section className="shadow-2xl shadow-[#307ef35b] max-w-6xl mt-40 mx-auto rounded-2xl w-full pt-20 pb-32 flex flex-row bg-primary-deep relative overflow-hidden px-10 gap-20">
      <img
        src="/images/shape.png"
        alt
        className="absolute top-0 -left-20 h-auto"
      />
      <h2 className="text-white relative z-20 text-6xl w-7/12">
        Make Your Dream CV Right Now!
      </h2>
      <div className="w-5/12">
        <p className="text-2xl font-medium text-white">
          Its Totally free!!! <br />
          Get started Now
        </p>
        <button className="bg-white px-7 text-lg font-normal py-5 mt-6 text-[#27425B] rounded-lg">
          Start Building
        </button>
      </div>
    </section>
  );
};

export default Dream;
