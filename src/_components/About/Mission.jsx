export default function Mission({ comp, mission }) {
  return (
    <section>
      <section className="flex flex-col px-8 lg:items-center justify-center gap-y-2 lg:gap-y-6 bg-white">
        <h1 className="text-4xl lg:text-5xl pt-16 lg:pt-24">
          <strong>{mission.title}</strong>
        </h1>
        <p className="text-xl lg:text-3xl lg:text-center max-w-3xl py-8">
          {mission.description}
        </p>
      </section>
      <comp.Carousel array_of_images={mission.images} />
    </section>
  );
}
