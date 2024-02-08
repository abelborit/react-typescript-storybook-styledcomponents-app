import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Task } from "../Task";
export const TaskList = ({ loading = false, tasks, onPinTask, onArchiveTask, }) => {
    const events = {
        onPinTask,
        onArchiveTask,
    };
    const LoadingRow = (_jsxs("div", { className: "loading-item", children: [_jsx("span", { className: "glow-checkbox" }), _jsxs("span", { className: "glow-text", children: [_jsx("span", { children: "Loading" }), " ", _jsx("span", { children: "cool" }), " ", _jsx("span", { children: "state" })] })] }));
    if (loading) {
        return (_jsxs("div", { className: "list-items", "data-testid": "loading", children: [LoadingRow, LoadingRow, LoadingRow, LoadingRow, LoadingRow, LoadingRow] }, "loading"));
    }
    if (tasks.length === 0) {
        return (_jsx("div", { className: "list-items", "data-testid": "empty", children: _jsxs("div", { className: "wrapper-message", children: [_jsx("span", { className: "icon-check" }), _jsx("p", { className: "title-message", children: "You have no tasks" }), _jsx("p", { className: "subtitle-message", children: "Sit back and relax" })] }) }, "empty"));
    }
    const tasksInOrder = [
        ...tasks.filter((task) => task.state === "TASK_PINNED"),
        ...tasks.filter((task) => task.state !== "TASK_PINNED"),
    ];
    return (_jsx("div", { className: "list-items", children: tasksInOrder.map((task) => (_jsx(Task, { task: task, ...events }, task.id))) }));
};
export default TaskList;
