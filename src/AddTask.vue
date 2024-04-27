<template>
  <div>
    <input
      v-model="newTask"
      placeholder="Add new task"
      @keyup.enter="addTask"
    />
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        axios
          .post("https://todolist.lacarei1221.repl.co/api/tasks", {
            title: this.newTask,
          })
          .then((response) => {
            this.$emit("task-added");
            this.newTask = "";
          })
          .catch((error) => {
            console.error("Error adding task:", error);
          });
      }
    },
  },
};
</script>
