import { useState } from "react";
import { createTask } from "../../services/taskService";

const AddTask = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      const data = await createTask({ title });

      setTitle("");

      onTaskCreated(data.task);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-5 text-2xl font-semibold text-white">
        Add Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex gap-4"
      >
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
            flex-1
            rounded-xl
            border
            border-slate-700
            bg-slate-950
            px-4
            py-3
            text-white
            placeholder:text-slate-500
            outline-none
            focus:border-violet-500
          "
        />

        <button
          type="submit"
          className="
            rounded-xl
            bg-violet-600
            px-6
            py-3
            font-medium
            text-white
            transition
            hover:bg-violet-700
          "
        >
          + Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;