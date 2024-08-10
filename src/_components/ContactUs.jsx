export default ({ comp, title }) => {
  return (
    <section className="text-black flex lg:flex-row flex-col justify-between justify-center items-center py-16 lg:px-48 px-20 max-lg:h-fit max-lg:gap-y-12 max-lg:py-16">
      <div className="w-full">
        <h3 className="lg:text-3xl text-5xl mb-4">Contact Us</h3>
        <p className="lg:text-lg text-4xl">
          Feel free to reach out to us via...
        </p>
      </div>
      <div className="flex flex-row items-center gap-6">
        <comp.Button
          text="Email"
          style="px-16 py-2 rounded-lg bg-transparent border-[1px] border-[#00070E] text-[#00070E] font-semibold text-lg inline-block max-lg:px-16 max-lg:py-6 max-lg:text-3xl"
          redirect_url="mailto:hello@sitblueprint.com"
        />
        <comp.Button
          text="Instagram"
          style="px-16 py-2 rounded-lg bg-transparent border-[1px] border-[#00070E] text-[#00070E] font-semibold text-lg inline-block max-lg:px-16 max-lg:py-6 max-lg:text-3xl"
          redirect_url="https://www.instagram.com/stevensblueprint/"
          openInNewTab
        />
      </div>
    </section>
  );
};
