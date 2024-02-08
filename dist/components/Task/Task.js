import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask, }) => {
    return (_jsxs("div", { className: `list-item ${state}`, children: [_jsxs("label", { htmlFor: "checked", "aria-label": `archiveTask-${id}`, className: "checkbox", children: [_jsx("input", { type: "checkbox", disabled: true, name: "checked", id: `archiveTask-${id}`, checked: state === "TASK_ARCHIVED" }), _jsx("span", { className: "checkbox-custom", onClick: () => onArchiveTask(id) })] }), _jsx("label", { htmlFor: "title", "aria-label": title, className: "title", children: _jsx("input", { type: "text", value: title, readOnly: true, name: "title", placeholder: "Input title" }) }), state !== "TASK_ARCHIVED" && (_jsx("button", { className: "pin-button", onClick: () => onPinTask(id), id: `pinTask-${id}`, "aria-label": `pinTask-${id}`, children: _jsx("span", { className: `icon-star` }) }, `pinTask-${id}`))] }));
};
export default Task;
