function Button({ children }) {
  return (
    <button className="text-xs font-bold sm:text-balance py-1 px-2 sm:py-2 sm:px-6 text-gray-100 bg-gray-600 hover:bg-gray-800 focus:outline-none focus:bg-gray-800 border-none rounded-3xl">
      {children}
    </button>
  );
}

export default Button;
