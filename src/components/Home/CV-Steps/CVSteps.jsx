import React from "react";

const CVSteps = () => {
  return (
    <section className="bg-primary-lite pt-10 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row items-center justify-between gap-40">
          <div className="w-6/12">
            {/* cv banner left */}
            <div className="">
              <p className="leading-8 text-xl font-medium text-primary-deep">
                Simplified Process, Swift Results
              </p>
              <h1 className="text-5xl text-dark-gray font-bold leading-tight capitalize mt-2 w-[400px]">
                Make Your CV in 3 Steps
              </h1>
              <p className="text-xl text-cadet-blue mt-4">
                Achieve your dream job in just 3 simple steps and under 5
                minutes. Our online resume maker, curated by experts and
                enhanced by data, is the trusted choice of millions of
                professionals.
              </p>
            </div>
            {/* cv banner right */}
          </div>
          <div className="w-6/12 relative flex justify-end pb-8">
            <img
              height={220}
              width={220}
              src="/images/templates/cv-1.png"
              alt=""
              className="z-10 relative drop-shadow-2xl"
            />
            <img
              height={220}
              width={220}
              src="/images/templates/cv-2.png"
              alt=""
              className="absolute left-14 top-14 drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="flex flex-row gap-5 mt-16">
          <div className="bg-primary-deep w-full cursor-pointer text-white p-6 rounded-lg">
            <i className="fa-solid fa-file-signature text-6xl" />
            <h4 className="mt-4 font-bold text-2xl leading-8">
              Select a Free Resume Template
            </h4>
            <p className="text-xl font-normal mt-1">
              Pick from a variety of free resume templates
            </p>
          </div>
          {/* card 2 */}
          <div className="bg-white hover:bg-primary-deep group w-full cursor-pointer p-6 rounded-lg">
            <i className="fa-solid fa-sliders text-6xl text-teal group-hover:text-white" />
            <h4 className="mt-4 text-teal group-hover:text-white font-bold text-2xl leading-8">
              Select a Free Resume Template
            </h4>
            <p className="text-xl text-cadet-blue group-hover:text-white font-normal mt-1">
              Pick from a variety of free resume templates
            </p>
          </div>
          {/* card 3 */}
          <div className="bg-white hover:bg-primary-deep group w-full cursor-pointer p-6 rounded-lg">
            <i className="fa-solid fa-file-export text-6xl text-teal group-hover:text-white" />
            <h4 className="mt-4 text-teal group-hover:text-white font-bold text-2xl leading-8">
              Select a Free Resume Template
            </h4>
            <p className="text-xl text-cadet-blue group-hover:text-white font-normal mt-1">
              Pick from a variety of free resume templates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CVSteps;
