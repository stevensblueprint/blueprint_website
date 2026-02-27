export default ({ comp, contactUs }) => {
  return (
    <section className="text-black flex lg:flex-row flex-col justify-between items-center md:max-w-[1440px] mx-auto gap-8 py-16 px-10">
      <div className="w-full">
        <h3 className="lg:text-5xl text-4xl mb-4 font-bold">
          {contactUs.title}
        </h3>
        <p className="text-2xl">{contactUs.description}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-2">
        {contactUs.buttons.map((button, index) => (
          <comp.Button
            key={index}
            text={button.text}
            style="w-full lg:w-auto px-16 min-w-[200px] py-2 rounded-lg bg-transparent border-[1px] border-[#00070E] text-[#00070E] text-center font-semibold text-2xl lg:text-lg inline-block hover:bg-primary hover:text-white transition-all"
            redirect_url={button.url}
            openInNewTab={button.openInNewTab}
          />
        ))}
      </div>
    </section>
  );
};
