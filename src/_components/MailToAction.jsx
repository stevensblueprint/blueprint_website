export default function ({ text, email = "blueprint@stevens.edu" }) {
  return (
    <div className="flex flex-col items-center max-lg:px-12 max-md:w-full max-md:px-4">
      <h1 className="text-2xl lg:text-4xl text-center text-primary font-bold px-8 lg:px-0 lg:w-3/5 my-12 lg:my-16">
        {text}{" "}
        <a href={`mailto:${email}`} className="inline-block hover:underline">
          {email}
          <img
            className="object-cover inline h-8 w-8 ml-2"
            src={"../../assets/clip_art/AiOutlineMail.svg"}
            alt="Email"
          />
        </a>
      </h1>
    </div>
  );
}
