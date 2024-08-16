function SideLink({ name, icon, path }) {
  return (
    <li className="text-white hover:bg-gray-600 inline-block w-full px-4 py-2 rounded-xl ">
      <a
        href={path}
        className="flex  text-xs sm:text-xl items-center justify-start gap-4"
      >
        {icon}
        <p className="text-xs font-semibold">{name}</p>
      </a>
    </li>
  );
}

export default SideLink;
