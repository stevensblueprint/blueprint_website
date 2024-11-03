import React from "https://esm.sh/react";

export default function DropdownFAQ({faq, index}) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <input type="checkbox" id={`accordion-item-${index}`} className="hidden peer" />
      <label htmlFor={`accordion-item-${index}`} className="p-4 cursor-pointer font-bold text-primary peer-checked:text-secondary">{faq.question}</label>
      <div className="overflow-hidden max-h-0 transition-all peer-checked:max-h-max w-full duration-300">
        {faq.answer}
      </div>      
    </div>
  )
}