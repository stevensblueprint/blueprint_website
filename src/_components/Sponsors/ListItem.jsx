export default function ListItem({ item, iconPath }) {
  return (
    <div className="flex pt-8">
      <img className="pr-3" src={iconPath} alt="icon" />
      <p className="text-xl">{item}</p>
    </div>
  );
}
