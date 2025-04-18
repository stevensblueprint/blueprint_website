export default function ListItem({ item, iconPath }) {
  return (
    <div className="flex pt-8">
      <img className="pr-3 h-8 w-10" src={iconPath} alt="icon" />
      <p className="text-xl">{item}</p>
    </div>
  );
}
