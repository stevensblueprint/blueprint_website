export default function ContactUs({ comp, contactUs }) {
  return (
    <section>
      <comp.MailToAction text={contactUs.mailToAction} />
      <div className="flex justify-center pb-12">
        <comp.Button
          style={
            "block px-8 py-2 lg:rounded-md rounded-md border border-black text-base leading-normal font-bold w-fit lg:text-base text-4xl hover:bg-primary hover:text-white transition-all"
          }
          text={contactUs.button.text}
          redirect_url={contactUs.button.url}
          download={contactUs.button.download}
        />
      </div>
    </section>
  );
}
