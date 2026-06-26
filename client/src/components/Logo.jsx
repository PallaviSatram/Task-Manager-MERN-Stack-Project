const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 rounded-2xl bg-violet-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
        T
      </div>

      <h1 className="text-3xl font-bold text-white">
        TaskFlow
      </h1>

      <p className="text-slate-400 text-sm">
        Organize your work beautifully
      </p>
    </div>
  );
};

export default Logo;