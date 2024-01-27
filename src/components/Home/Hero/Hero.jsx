import React from "react";
import Container from "../../common/container";

const Hero = () => {
  return (
    <div className="bg-primary-lite">
      <Container>
        <div className="flex">
          <div className="basis-1/2 py-5">
            <div className="my-10">
              <span className="border-2 text-black font-bold px-5 py-3 rounded-full">
                <span className="uppercase">
                  The <span className="text-primary-deep">#1</span> resume
                  builder
                </span>
              </span>
            </div>
            <h1 className="text-5xl font-semibold">
              Build a Resume for the Job Market in Minutes
            </h1>
            <p className="my-5">
              Utilize our free builder and expert templates to create your
              resume with speed and efficiency
            </p>
            <div className="flex mt-7">
              <button className="bg-primary-deep text-white px-4 py-3 shadow rounded-lg">
                Create your CV
              </button>
            </div>
          </div>
          <div className="basis-1/2">
            <img
              height={692}
              width={573}
              className="mx-auto"
              src="/images/hero.svg"
              alt="Resume builder svg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Hero;
