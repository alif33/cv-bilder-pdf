import React from "react";

const Templates = () => {
  return (
    <section className="max-w-6xl mx-auto mt-20">
      <div className="text-center">
        <h1 className="text-dark-gray text-5xl font-bold leading-tight capitalize">
          Select From 100+ Free Templates
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-cadet-blue text-xl font-normal leading-8">
          Choose from our collection of tried-and-true resume templates,
          meticulously crafted by a team of HR professionals and skilled
          typographers
        </p>
      </div>
      <div className="flex flex-row justify-center overflow-hidden items-center box-border w-full mt-24 pb-28">
        <div className="w-[30%] -mr-14">
          <img
            height={455}
            width={455}
            src="/images/templates/1.png"
            alt=""
            className="h-full w-full rounded-md drop-shadow-2xl"
          />
        </div>
        <div className="w-[40%] z-20 relative">
          <img
            height={455}
            width={455}
            src="/images/templates/3.png"
            alt=""
            className="box-border w-full h-full rounded-md drop-shadow-2xl"
          />
        </div>
        <div className="w-[30%] -ml-10">
          <img
            height={455}
            width={455}
            src="/images/templates/2.png"
            alt=""
            className="box-border h-full w-full rounded-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
export default Templates;
