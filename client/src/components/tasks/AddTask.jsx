import { useState } from "react";
import { createTask } from "../../services/taskService";

const AddTask = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      const data = await createTask({
        title,
      });

      setTitle("");

      onTaskCreated(data.task);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 flex gap-4"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none"
      />

      <button
        className="rounded-xl bg-violet-600 px-6 text-white"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;