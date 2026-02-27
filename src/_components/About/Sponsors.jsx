export default function Sponsors({ comp, sponsors }) {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col lg:items-center p-8 w-full">
        <h1 className="leading-10 mb-12 text-4xl lg:text-5xl">
          <strong>{sponsors.title}</strong>
        </h1>
        <p className="lg:text-center text-xl lg:text-2xl mb-4 lg:px-14 pb-8 max-w-2xl">
          {sponsors.description}
        </p>
        <comp.Button
          style={
            "mx-auto px-16 py-2 rounded-xl border-2 border-black text-black font-bold w-fit lg:text-xl hover:bg-primary hover:text-white transition-all"
          }
          text={sponsors.button.text}
          redirect_url={sponsors.button.url}
        />
        <div className="flex flex-row py-12 gap-5 mb-16 mx-auto">
          {sponsors.logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="object-cover h-20 max-w-none"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
