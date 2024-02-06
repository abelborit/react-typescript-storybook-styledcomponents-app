/* Imports */
import { Meta, StoryObj } from "@storybook/react";
import { TaskList } from "../components/TaskList";
/* Al importar TaskStories, pudimos componer los argumentos (args para abreviar) en nuestras historias con el mínimo esfuerzo. De esa manera, se conservan los datos y acciones (devoluciones de llamada simuladas) esperados por ambos componentes. */
import * as TaskStories from "./Task.stories";

/* Meta */
/* Los Decoradores (decorators) son una forma de proporcionar envoltorios arbitrarios a las historias. En este caso, estamos usando una clave decoradora en la exportación predeterminada para agregar algo de padding alrededor del componente renderizado. También se pueden utilizar para envolver historias en "proveedores", es decir, componentes de biblioteca que establecen el contexto de React. */
const meta = {
  title: "Guide_Storybook/TaskList",
  component: TaskList,
  tags: ["autodocs"],
  parameters: {
    // layout: "centered",
  },
  decorators: [
    (story) => {
      console.log(story());
      return <div style={{ padding: "3rem" }}>{story()}</div>;
    },
  ],
} satisfies Meta<typeof TaskList>;
export default meta;

/* Story */
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  /* Args */
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.jsx.
    tasks: [
      { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
      { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
      { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
      { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
      { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
      { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
    ],
  },
};

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ],
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
};
