import React from "https://esm.sh/react";

export default function DropdownFAQ({ faq, index }) {
  return (
    <div className="flex flex-col justify-center items-center w-full first-of-type:border-t-[1px] border-b-[1px] border-black">
      <input
        type="checkbox"
        id={`accordion-item-${index}`}
        className="hidden peer"
      />
      <label
        htmlFor={`accordion-item-${index}`}
        className="p-3 group cursor-pointer relative font-bold text-primary flex w-full justify-between items-center"
      >
        <p className="text-xl">{faq.question}</p>
        <img
          src="/assets/vector/faq_arrow.svg"
          alt="Down Arrow"
          className="h-[7px] w-3 peer-checked:group-[]:rotate-180"
        />
      </label>
      <div className="overflow-hidden max-h-0 peer-checked:max-h-max w-full transition-all duration-300 px-3 peer-checked:pt-2 peer-checked:pb-[20px]">
        <p className="text-xl leading-6">{faq.answer}</p>
      </div>
    </div>
  );
}
