<template>
  <div>
    <h1>HelloWorld</h1>
    <add-task @task-added="fetchTasks"></add-task>
    <div v-for="task in tasks" :key="task.id">
      <task-item
        :task="task"
        @task-updated="fetchTasks"
        @task-deleted="fetchTasks"
      ></task-item>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AddTask from "./AddTask.vue";
import TaskItem from "./TaskItem.vue";

export default {
  components: {
    AddTask,
    TaskItem,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      axios
        .get("ejercicio1/app/Http/Controllers/TaskController.php")
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => {
          console.error("Error fetching tasks:", error);
        });
    },
  },
};
</script>
