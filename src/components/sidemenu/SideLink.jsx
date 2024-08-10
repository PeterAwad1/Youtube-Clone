function SideLink({ name, icon, path }) {
  return (
    <li className="text-white ">
      <a
        href={path}
        className="flex flex-col text-xs sm:text-xl items-center justify-center gap-1"
      >
        {icon}
        <p className="text-xs sm:text-sm font-semibold">{name}</p>
      </a>
    </li>
  );
}

export default SideLink;
