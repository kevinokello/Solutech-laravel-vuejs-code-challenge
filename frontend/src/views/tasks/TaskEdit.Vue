<script setup>
import useTasks from "../../composables/tasks";
import { onMounted } from "vue";

const { task, getTask, updateTask, errors } = useTasks();

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

onMounted(() => getTask(props.id));
</script>
<template>
  <div class="mt-12">
    <form
      class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      @submit.prevent="updateTask($route.params.id)"
    >
      <div class="space-y-6">
        <div class="mb-6">
          <label
            for="name"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="task.name"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
          />
          <div v-if="errors.name">
            <span class="text-sm text-red-400">{{ errors.name[0] }}</span>
          </div>
        </div>
       
        <div class="mt-4">
          <button
            type="submit"
            class="
              px-4
              py-2
              bg-indigo-500
              hover:bg-indigo-700
              text-white
              rounded
            "
          >
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</template>