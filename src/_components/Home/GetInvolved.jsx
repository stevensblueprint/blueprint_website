export default function GetInvolved({ comp, getInvolved }) {
  return (
    <section className="flex flex-col items-center justify-center px-10 py-10 gap-y-6 bg-white">
      <h1 className="lg:text-5xl text-4xl lg:text-center w-full">
        <strong>{getInvolved.title}</strong>
      </h1>
      <div className="flex flex-col md:flex-row md:max-w-[1440px] md:mx-auto justify-between gap-6 md:gap-x-6 lg:gap-x-12 flex-nowrap lg:gap-y-6">
        {getInvolved.cards.map((card, index) => (
          <comp.GetInvolvedCard
            key={index}
            title={card.title}
            description={card.description}
            icon_url={card.icon_url}
            redirect_url={card.redirect_url}
          />
        ))}
      </div>
    </section>
  );
}
