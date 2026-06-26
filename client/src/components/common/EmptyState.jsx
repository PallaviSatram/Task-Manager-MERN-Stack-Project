const EmptyState = () => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-slate-700
        bg-slate-900
        py-20
      "
    >
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-900/40 text-5xl">
        📋
      </div>

      <h2 className="text-4xl font-bold text-white">
        No Tasks Yet
      </h2>

      <p className="mt-4 text-center text-lg text-slate-400">
        Create your first task to get started.
      </p>
    </div>
  );
};

export default EmptyState;