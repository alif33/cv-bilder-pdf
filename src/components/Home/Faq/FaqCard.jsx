import React from "react";
import { FaPlus, FaMinus } from "../../../assets/Icons/Icons";

const FaqCard = ({ question, answer, id }) => {
  return (
    <div className="w-full bg-white p-6 rounded-xl relative">
      <input type="checkbox" className="peer absolute hidden" id={id} />
      <label
        htmlFor={id}
        className="text-xl rounded-xl w-full font-semibold text-dark-gray select-none cursor-pointer flex flex-row justify-between"
      >
        {question}
      </label>
      <FaPlus className="fa-solid fa-plus peer-checked:hidden absolute right-5 top-7" />
      <FaMinus className="fa-solid fa-minus absolute right-5 top-7" />
      <p className="bg-white hidden peer-checked:block peer-checked:bg-white mt-5 leading-8 text-xl font-normal text-[#000000B2]">
        {answer}
      </p>
    </div>
  );
};

export default FaqCard;

//  How does the CV builder website stand out from others?

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
//         doloribus nihil impedit expedita architecto, aperiam repellendus laborum
//         ipsum nemo aspernatur sapiente
//         <br />
//         Q: Can I customize the templates to match my personal style?
