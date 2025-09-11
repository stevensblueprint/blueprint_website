export default function ContactUs({ comp }) {
	return (
		<section>
			<comp.MailToAction text="Want to get in touch with us? Email us at" />
			<div className="flex justify-center pb-12">
				<comp.Button
					style={
						"block px-8 py-2 lg:rounded-md rounded-md border border-black text-base leading-normal font-bold w-fit lg:text-base text-4xl hover:bg-primary hover:text-white transition-all"
					}
					text={"Download our proposal template"}
					redirect_url={"../../assets/docs/NPO_Project_Proposal.pdf"}
					download={"NPO_Project_Proposal.pdf"}
				/>
			</div>
		</section>
	);
}
