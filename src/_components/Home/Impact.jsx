export default function Impact({ comp, impact }) {
  return (
    <section className="flex flex-col lg:items-center justify-center pt-16 pb-4 lg:pt-24 lg:py-32 gap-y-6 bg-gray-50 px-8">
      <h1 className="text-4xl lg:text-5xl lg:text-center lg:pb-20 sm:pb-10">
        <strong>{impact.title}</strong>
      </h1>
      <div className="flex lg:flex-row flex-col gap-10 lg:gap-20 lg:items-center justify-evenly">
        {impact.stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col lg:items-center justify-center"
          >
            <h2 className={`text-8xl lg:text-9xl ${stat.colorClass} font-bold`}>
              {stat.number}
            </h2>
            <span className="lg:text-center text-2xl lg:text-3xl font-bold">
              {stat.labels.map((label, labelIdx) => (
                <span key={labelIdx} className="block">
                  {label}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
