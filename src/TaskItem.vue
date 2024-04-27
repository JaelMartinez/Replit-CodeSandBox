<template>
  <div>
    <span :class="{ 'is-complete': task.is_completed }">{{ task.title }}</span>
    <button @click="toggleTask">
      {{ task.is_completed ? "Mark Incomplete" : "Mark Complete" }}
    </button>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["task"],
  methods: {
    toggleTask() {
      axios
        .put(`https://todolist.lacarei1221.repl.co/api/tasks/${this.task.id}`, {
          is_completed: !this.task.is_completed,
        })
        .then(() => {
          this.$emit("task-updated");
        })
        .catch((error) => {
          console.error("Error updating task:", error);
        });
    },
    deleteTask() {
      axios
        .delete(
          `https://todolist.lacarei1221.repl.co/api/tasks/${this.task.id}`,
        )
        .then(() => {
          this.$emit("task-deleted");
        })
        .catch((error) => {
          console.error("Error deleting task:", error);
        });
    },
  },
};
</script>

<style>
.is-complete {
  text-decoration: line-through;
}
</style>
