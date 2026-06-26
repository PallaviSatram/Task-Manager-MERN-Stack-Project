import { deleteTask } from "../../services/taskService";

const TaskCard = ({ task, onDelete, onEdit }) => {
  const handleDelete = async () => {
    try {
      await deleteTask(task._id);

      onDelete(task._id);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="text-lg font-semibold text-white">
        {task.title}
      </h3>

      <p className="mt-2 text-slate-400">
        {task.description}
      </p>

      <div className="mt-4 flex justify-between">
        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
          {task.status}
        </span>

        <span className="rounded-full bg-violet-600 px-3 py-1 text-sm text-white">
          {task.priority}
        </span>
      </div>
      <button
        onClick={() => onEdit(task)}
        className="mt-5 mr-3 rounded-lg bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="mt-5 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;