import React from "https://esm.sh/react";
import MarkdownIt from "https://esm.sh/markdown-it";

const md = new MarkdownIt();

export default function DropdownFAQ({ faq, index }) {
  const answerHtmlContent = md.render(faq.answer);

  return (
    <div className="flex flex-col justify-center items-center w-full first-of-type:border-t-[1px] border-b-[1px] border-black">
      <input
        type="checkbox"
        id={`accordion-item-${index}`}
        className="hidden peer"
      />
      <label
        htmlFor={`accordion-item-${index}`}
        className="px-3 py-2 group cursor-pointer font-bold text-primary w-full flex justify-between items-center gap-4 md:gap-0"
      >
        <p className="text-xl leading-6">{faq.question}</p>
        <img
          src="/assets/vector/faq_arrow.svg"
          alt="Down Arrow"
          className="h-[7px] w-3 peer-checked:group-[]:rotate-180"
        />
      </label>
      {/* Smooth Animation Requires number for max-height, choose arbitrarily large number */}
      <div className="overflow-hidden max-h-0 peer-checked:max-h-96 w-full transition-all duration-300 px-3 peer-checked:pt-2 peer-checked:pb-[20px]">
        <div
          className="prose prose-p:text-xl prose-p:leading-6 max-w-none"
          dangerouslySetInnerHTML={{ __html: answerHtmlContent }}
        />
      </div>
    </div>
  );
}
