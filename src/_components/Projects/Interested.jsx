export default function Interested() {
  return (
    <section className="flex flex-col lg:items-center justify-center pt-20 lg:pb-10 gap-y-2 lg:gap-y-6 bg-white px-8">
      <h1 className="text-4xl lg:text-5xl">
        <strong>Project Gallery</strong>
      </h1>
      <p className="lg:text-center text-xl lg:text-3xl lg:mb-4 max-w-4xl py-8">
        Interested in collaborating with other peers at Stevens on a project?{" "}
        <br /> Check out our{" "}
        <a href="/students" className="underline">
          student opportunities
        </a>
        !
      </p>
    </section>
  );
}
