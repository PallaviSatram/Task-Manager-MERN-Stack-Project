const EmptyState = () => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center">
      <h2 className="text-2xl font-semibold text-white">
        No Tasks Yet
      </h2>

      <p className="mt-3 text-slate-400">
        Create your first task to get started.
      </p>
    </div>
  );
};

export default EmptyState;