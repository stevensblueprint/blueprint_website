export default function EmailLink({ name, emailAddr, textColor }) {
  return (
    <p>
      <strong className={`text-[${textColor}]`}>
        {`${name}: `}
        <a className="underline" target="_blank" href={`mailto:${emailAddr}`}>
          {emailAddr}
        </a>
      </strong>
    </p>
  );
}
