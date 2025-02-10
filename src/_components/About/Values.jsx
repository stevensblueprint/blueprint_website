export default function Values({ comp, values }) {
  return (
    <section className="flex place-content-center" id="info">
      <div className="flex flex-col lg:items-center py-20 px-8 lg:px-40">
        <h1 className="mb-12 text-4xl lg:text-5xl">
          <strong>Our Values</strong>
        </h1>
        <div className="flex flex-col sm:flex-row lg:p-10 gap-14">
          {values.map((value, index) => (
            <comp.ValueCard key={index} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
