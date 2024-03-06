import { CreateTaskCard, TaskList } from "@/components";

export const metadata = {
  title: "Task manager",
  description: "Task manager page",
};

export default function TasksPage() {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <h1 className="text-[30px] font-semibold">Task Manager</h1>
      <CreateTaskCard />
      <TaskList />
    </div>
  );
}
