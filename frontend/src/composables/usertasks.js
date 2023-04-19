import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/assesment/";

export default function Usertasks() {
  const usertasks = ref([]);
  const usertask = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getUserTasks = async () => {
    const response = await axios.get("usertasks");
    usertasks.value = response.data.data;
  };

  const getStatus = async (id) => {
    const response = await axios.get("usertasks/" + id);
    status.value = response.data.data;
  };

  const storeStatus = async (data) => {
    try {
      await axios.post("usertasks", data);
      await router.push({ name: "StatusIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateStatus = async (id) => {
    try {
      await axios.put("usertasks/" + id, status.value);
      await router.push({ name: "StatusIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroyStatus = async (id) => {
    if (!window.confirm("Are You Sure?")) {
      return;
    }
    await axios.delete("usertasks/" + id);
    await getUserTasks();
  };

  return {
    usertask,
    usertasks,
    getUserTask,
    getusertasks,
    storeUserTask,
    updateUserTask,
    destroyUserTask,
    errors,
  };
}