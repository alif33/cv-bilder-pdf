import React from "react";
import { FaPlus, FaMinus } from "../../../assets/Icons/Icons";
import FaqCard from "./FaqCard";

const Faq = () => {
  const faqList = [
    {
      id: 1,
      question: "How does the CV builder website stand out from others?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus nihil impedit expedita architecto, aperiam repellendus laborum ipsum nemo aspernatur sapiente ",
    },
    {
      id: 2,
      question: "Is the CV builder suitable for all professions?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus nihil impedit expedita architecto, aperiam repellendus laborum ipsum nemo aspernatur sapiente ",
    },
    {
      id: 3,
      question: "How does data-driven optimization benefit users?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus nihil impedit expedita architecto, aperiam repellendus laborum ipsum nemo aspernatur sapiente ",
    },
    {
      id: 4,
      question: "Can I customize the templates to match my personal style?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus nihil impedit expedita architecto, aperiam repellendus laborum ipsum nemo aspernatur sapiente ",
    },
  ];
  return (
    <section className="bg-primary-lite py-20 mt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="mt-4 text-5xl w-full text-center font-bold text-dark-gray">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="mt-10">
          {/* card 1 */}
          <div className>
            <div className="flex flex-col gap-3">
              {faqList.map((faq) => (
                <FaqCard
                  id={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
