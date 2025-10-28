export default function Sponsors({ comp }) {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col lg:items-center p-8 w-full">
        <h1 className="leading-10 mb-12 text-4xl lg:text-5xl">
          <strong>Our Sponsors</strong>
        </h1>
        <p className="lg:text-center text-xl lg:text-2xl mb-4 lg:px-14 pb-8 max-w-2xl">
          We are grateful to our sponsors who provide us with resources and
          support!
        </p>
        <comp.Button
          style={
            "mx-auto px-16 py-2 rounded-xl border-2 border-black text-black font-bold w-fit lg:text-xl hover:bg-primary hover:text-white transition-all"
          }
          text={"Become a sponsor"}
          redirect_url={"/sponsors"}
        />
        <div className="flex flex-row py-12 gap-5 mb-16 mx-auto">
          <img
            src="../assets/logos/notion.webp"
            alt="notion"
            className="object-cover h-20 max-w-none"
          />
          <img
            src="../assets/logos/github.webp"
            alt="github"
            className="object-cover h-20 max-w-none"
          />
          <img
            src="../assets/logos/perplexity.webp"
            alt="perplexity"
            className="object-cover h-20 max-w-none"
          />
          <img
            src="../assets/logos/mongoDB_logo.png"
            alt="mongodb"
            className="object-cover h-20 max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
