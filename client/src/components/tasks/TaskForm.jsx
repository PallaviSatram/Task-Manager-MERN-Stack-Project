import { useState, useEffect } from "react";

const TaskForm = ({
  initialData,
  onSubmit,
  buttonText,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task title"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white"
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white"
      />

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white"
      >
        <option>Pending</option>
        <option>Completed</option>
      </select>

      <button className="rounded-xl bg-violet-600 px-5 py-3 text-white">
        {buttonText}
      </button>
    </form>
  );
};

export default TaskForm;