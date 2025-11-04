export default function Mission({ comp }) {
  return (
    <section>
      <section className="flex flex-col px-8 lg:items-center justify-center gap-y-2 lg:gap-y-6 bg-white">
        <h1 className="text-4xl lg:text-5xl pt-16 lg:pt-24">
          <strong>Our Mission</strong>
        </h1>
        <p className="text-xl lg:text-3xl lg:text-center max-w-3xl py-8">
          At Blueprint, we strive to make technology accessible and useful for
          those who create communities and promote public welfare.
        </p>
      </section>
      <comp.Carousel
        array_of_images={[
          "../assets/photos/career_night.webp",
          "../assets/photos/eboard_merch.webp",
          "../assets/photos/google_event.webp",
          "../assets/photos/full_eboard1.webp",
          "../assets/photos/ebm.webp",
          "../assets/photos/google_event_1.webp",
          "../assets/photos/cs_carnival.webp",
        ]}
      />
    </section>
  );
}
