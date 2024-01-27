import React from "react";

const About = () => {
  return (
    <section className="relative">
      <div className="max-w-6xl mt-14 mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-primary-deep font-normal leading-8">
            Why we are best?
          </p>
          <h1 className="my-5 text-5xl font-bold text-dark-gray">
            Unrivaled Excellence - Why Our CV Maker Stands Out
          </h1>
          <p className="text-cadet-blue text-xl font-normal leading-8">
            We prioritize user experience with an intuitive interface, making CV
            creation a seamless process
          </p>
        </div>
        <div className="flex items-center justify-between flex-row mt-16 pt-12 relative">
          <div className="w-7/12">
            <img
              src="/images/icons/star.png"
              alt=""
              className="absolute top-0 -z-10"
            />
            <img
              height={100}
              width={200}
              src="/images/MacBook.png"
              alt=""
              className="w-full relative z-20"
            />
          </div>
          <div className="w-5/12 flex flex-col gap-3">
            {/* card 1 */}
            <div className="border border-gray-300 rounded-lg px-6 py-4">
              <h3 className="text-very-dark-gray text-xl font-extrabold leading-normal">
                Expert-Crafted Templates
              </h3>
              <p className="mt-1 text-[#1E1E1EBF] text-balance leading-6 font-normal">
                Our CV maker boasts a diverse selection of expert-crafted
                templates, meticulously designed to align with industry
                standards and showcase professionalism
              </p>
            </div>
            {/* card 2 */}
            <div className="border border-gray-300 rounded-lg px-6 py-4">
              <h3 className="text-very-dark-gray text-xl font-extrabold leading-normal">
                Expert-Crafted Templates
              </h3>
              <p className="mt-1 text-[#1E1E1EBF] text-balance leading-6 font-normal">
                We prioritize user experience with an intuitive interface,
                making CV creation a seamless process
              </p>
            </div>
            {/* card 3 */}
            <div className="border border-gray-300 rounded-lg px-6 py-4">
              <h3 className="text-very-dark-gray text-xl font-extrabold leading-normal">
                Expert-Crafted Templates
              </h3>
              <p className="mt-1 text-[#1E1E1EBF] text-balance leading-6 font-normal">
                We prioritize user experience with an intuitive interface,
                making CV creation a seamless process
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
