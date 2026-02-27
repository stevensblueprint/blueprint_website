export default function Interested({ interested }) {
  return (
    <section className="flex flex-col lg:items-center justify-center pt-16 lg:pt-24 lg:pb-10 gap-y-2 lg:gap-y-6 bg-white px-8">
      <h1 className="text-4xl lg:text-5xl">
        <strong>{interested.title}</strong>
      </h1>
      <p
        className="lg:text-center text-xl lg:text-3xl lg:mb-4 max-w-4xl py-8"
        dangerouslySetInnerHTML={{ __html: interested.description }}
      />
    </section>
  );
}
