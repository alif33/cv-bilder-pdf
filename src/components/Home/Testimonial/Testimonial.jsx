import React from "react";

const Testimonial = () => {
  
  const testimonials = [
    {
      title:
        "The CV builder website exceeded my expectations. The templates were modern, and the customization options allowed me to tailor my CV to perfection. I landed my dream job within weeks of using it. Highly recommended!",
    },
    {
      title:
        "The CV builder website exceeded my expectations. The templates were modern, and the customization options allowed me to tailor my CV to perfection. I landed my dream job within weeks of using it. Highly recommended!",
    },
    {
      title:
        "The CV builder website exceeded my expectations. The templates were modern, and the customization options allowed me to tailor my CV to perfection. I landed my dream job within weeks of using it. Highly recommended!",
    },
  ];
  
  return (
    <section className="mt-28 max-w-6xl mx-auto">
      {/* testimonial heading */}
      <div className="flex flex-row justify-between items-end">
        <div className="text-left w-full">
          <p className="text-xl text-primary-deep font-normal leading-8">
            Testimonials
          </p>
          <div className="flex flex-row justify-between items-center">
            <h1 className="mt-4 text-5xl w-full font-bold text-dark-gray max-w-lg">
              See what our users says about us
            </h1>
            <div className="h-min w-full text-end gap-5 flex flex-row justify-end">
              <i className="fa-solid fa-angle-left text-2xl text-gray-300 hover:text-primary-deep cursor-pointer active:text-primary-deep focus:text-primary-deep" />
              <i className="fa-solid fa-angle-right text-2xl text-primary-deep hover:text-primary-deep cursor-pointer active:text-primary-deep focus:text-primary-deep" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-row gap-3">
        {/* card 1 */}
        <div className="p-7 cursor-pointer group w-full bg-primary-deep text-white rounded-lg">
          <p className="text-base font-normal leading-6">
            "As a recent graduate, I needed a CV that would make an impact. The
            CV builder website not only provided a range of fresh templates but
            also guided me through the entire process. The feedback I received
            during interviews confirmed the effectiveness of my new CV.
          </p>
          <div className="flex flex-row justify-end mt-6 gap-4 items-center">
            <div className="text-right leading-6">
              <h4 className="text-base font-bold leading-6">Patricia</h4>
              <p className="text-sm font-normal">Founder, Exoticana</p>
            </div>
            <div className="bg-white p-1 rounded-full">
              <img
                src="/images/avatar/Main Photo.svg"
                alt
                className="rounded-full w-16 h-16"
              />
            </div>
          </div>
        </div>
        {/* cards */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-7 h-min cursor-pointer group hover:bg-primary-deep w-full shadow-2xl shadow-gray-300 rounded-lg"
          >
            <p className="text-base group-hover:text-white font-normal text-gray-500/95 leading-6">
              {testimonial.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
