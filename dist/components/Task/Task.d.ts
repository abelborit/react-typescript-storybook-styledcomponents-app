export interface TaskInterface {
    id: string;
    title: string;
    state: string;
}
export interface TaskProps {
    task: TaskInterface;
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void;
}
export declare const Task: ({ task: { id, title, state }, onArchiveTask, onPinTask, }: TaskProps) => import("react/jsx-runtime").JSX.Element;
export default Task;
