import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import TaskList from "./TaskList.vue";
import AddTask from "./AddTask.vue";
import TaskItem from "./TaskItem.vue";

const app = createApp(App);

app.component("add-task", AddTask);
app.component("task-item", TaskItem);
app.component("task-list", TaskList);

app.mount("#app");
