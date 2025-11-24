export default function ContactUs({ comp }) {
  return (
    <section>
      <comp.MailToAction 
        text="Want to get in touch with us? Reach out at" 
        email="sit.blueprint@gmail.com"
      />
      <div className="flex justify-center pb-12">
        <comp.Button
          style={
            "block px-8 py-2 lg:rounded-md rounded-md border border-black text-black text-base leading-normal font-bold w-fit lg:text-base text-4xl hover:bg-primary hover:text-white hover:border-transparent transition-all"
          }
          text={"Download our proposal template"}
          redirect_url={"../../assets/docs/NPO_Project_Proposal.pdf"}
          download={"NPO_Project_Proposal.pdf"}
        />
      </div>
    </section>
  );
}
