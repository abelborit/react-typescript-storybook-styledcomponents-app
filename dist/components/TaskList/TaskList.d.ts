import { TaskInterface } from "../Task";
export interface TaskListProps {
    loading?: boolean;
    tasks: TaskInterface[];
    onPinTask: (id: string) => void;
    onArchiveTask: (id: string) => void;
}
export declare const TaskList: ({ loading, tasks, onPinTask, onArchiveTask, }: TaskListProps) => import("react/jsx-runtime").JSX.Element;
export default TaskList;
