<script setup>
import useTasks from "../../composables/tasks";
import { onMounted } from "vue";

const { tasks, getTasks, destroyTask } = useTasks();

onMounted(() => getTasks());
</script>
<template>
  <div class="mt-12">
    <div class="flex justify-end m-2 p-2">
      <RouterLink
        :to="{ name: 'TaskCreate' }"
        class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded"
        >New Task</RouterLink
      >
    </div>
    <div class="overflow-x-auto relative" bis_skin_checked="1">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="
            text-xs text-gray-700
            uppercase
            bg-gray-50
            dark:bg-gray-700 dark:text-gray-400
          "
        >
          <tr>
            <th scope="col" class="py-3 px-6">Name</th>
            <th scope="col" class="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="task in tasks"
            :key="task.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td class="py-4 px-6">{{ task.name }}</td>
            <td class="py-4 px-6 space-x-2">
              <RouterLink
                :to="{ name: 'TaskEdit', params: { id: tasks.id } }"
                class="
                  px-4
                  py-2
                  bg-green-500
                  hover:bg-green-700
                  text-white
                  rounded
                "
                >Edit</RouterLink
              >
              <button
                @click="destroyTask(task.id)"
                class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>