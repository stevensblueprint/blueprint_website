export default ({ comp, title }) => {
  return (
    <section className="text-black flex lg:flex-row flex-col justify-between items-center md:max-w-[1440px] mx-auto gap-8 py-16 px-10">
      <div className="w-full">
        <h3 className="lg:text-5xl text-4xl mb-4 font-bold">Contact Us</h3>
        <p className="text-2xl">Feel free to reach out to us via...</p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-2">
        <comp.Button
          text="Email"
          style="w-full lg:w-auto px-16 min-w-[200px] py-2 rounded-lg bg-primary text-white text-center font-semibold text-2xl lg:text-lg inline-block hover:opacity-90 transition-all"
          redirect_url="mailto:blueprint@stevens.edu"
        />
        <comp.Button
          text="LinkedIn"
          style="w-full lg:w-auto px-16 min-w-[200px] py-2 rounded-lg bg-transparent border-[1px] border-[#00070E] text-[#00070E] text-center font-semibold text-2xl lg:text-lg inline-block hover:bg-primary hover:text-white transition-all"
          redirect_url="https://www.linkedin.com/company/stevens-blueprint/"
          openInNewTab
        />
        <comp.Button
          text="Instagram"
          style="w-full lg:w-auto px-16 min-w-[200px] py-2 rounded-lg bg-transparent border-[1px] border-[#00070E] text-[#00070E] text-center font-semibold text-2xl lg:text-lg inline-block hover:bg-primary hover:text-white transition-all"
          redirect_url="https://www.instagram.com/stevensblueprint/"
          openInNewTab
        />
      </div>
    </section>
  );
};
