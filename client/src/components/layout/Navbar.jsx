const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
      <h1 className="text-2xl font-bold text-white">
        TaskFlow
      </h1>

      <button className="rounded-lg bg-violet-600 px-4 py-2 text-white hover:bg-violet-700">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;