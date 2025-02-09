export default function Sponsors({ comp }) {
  return (
    <section className="flex place-content-center items-center justify-center">
      <div className="flex flex-col items-center p-8 max-lg:px-12 w-full max-md:px-4">
        <h1 className="leading-10 mb-6 lg:mb-12 text-4xl lg:text-5xl">
          <strong>Our Sponsors</strong>
        </h1>
        <p className="text-center text-xl lg:text-2xl mb-4 lg:px-14 px-12 py-8 max-w-2xl">
          We are grateful to our sponsors who provide us with the resources and
          support we need at Blueprint.
        </p>
        <comp.Button
          style={
            "px-16 py-2 rounded-xl border-2 border-black text-black font-bold w-fit lg:text-xl hover:bg-primary hover:text-white transition-all"
          }
          text={"Become a sponsor"}
          redirect_url={"/partners"}
        />
        <div className="flex flex-row py-12 gap-5 mb-16 ml-8">
          <img
            src="../assets/logos/notion.png"
            alt="notion"
            className="object-cover h-20 max-w-none"
          />
          <img
            src="../assets/logos/github.png"
            alt="github"
            className="object-cover h-20 max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
