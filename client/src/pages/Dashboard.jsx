import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import StatsCard from "../components/dashboard/StatsCard";
import TaskCard from "../components/tasks/TaskCard";
import AddTask from "../components/tasks/AddTask";
import EmptyState from "../components/common/EmptyState";
import { updateTask } from "../services/taskService";
import TaskForm from "../components/tasks/TaskForm";

import { getTasks } from "../services/taskService";

const Dashboard = () => {
  const [editingTask, setEditingTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  const handleTaskCreated = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const handleTaskDeleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task._id !== taskId)
    );
  };

  const handleTaskUpdated = async (updatedTask) => {
    try {
      const response = await updateTask(
        editingTask._id,
        updatedTask
      );

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === editingTask._id
            ? response.task
            : task
        )
      );

      setEditingTask(null);
    } catch (error) {
      console.log(error);
    }
  };

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

    <main className="mx-auto max-w-7xl px-8 py-10">
    <h1 className="text-4xl font-bold text-white">
      Dashboard
    </h1>

    <p className="mt-2 text-slate-400">
      Welcome to TaskFlow
    </p>

    {/* Stats */}
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Tasks"
        value={tasks.length}
      />

      <StatsCard
        title="Completed"
        value={completedTasks}
      />

      <StatsCard
        title="Pending"
        value={pendingTasks}
      />

      <StatsCard
        title="High Priority"
        value={highPriorityTasks}
      />
    </div>

    {/* Edit Form */}
    {editingTask && (
      <div className="mt-10">
        <TaskForm
          initialData={editingTask}
          onSubmit={handleTaskUpdated}
          buttonText="Save Changes"
        />
      </div>
    )}

    {/* Add Task */}
    <div className="mt-10">
      <AddTask
        onTaskCreated={handleTaskCreated}
      />
    </div>

    {/* Task List */}
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold text-white">
        My Tasks
      </h2>

      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={handleTaskDeleted}
              onEdit={setEditingTask}
            />
          ))}
        </div>
      )}
    </section>
    </main>
    </div>
  );
};

export default Dashboard;