export default function HeroButton({
  text,
  redirect_url,
  download,
  openInNewTab = false,
}) {
  const target = openInNewTab ? "_blank" : "";
  return (
    <a
      className="sm:min-w-[191px] text-lg text-center py-2 px-3 md:px-4 rounded-md border bg-white text-primary font-semibold inline-flex items-center justify-center hover:bg-primary hover:text-white transition-all active:scale-95"
      href={redirect_url}
      target={target}
      download={download}
    >
      {text}
    </a>
  );
}
