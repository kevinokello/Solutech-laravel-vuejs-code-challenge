import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/assesment/";

export default function useStatuses() {
  const statuses = ref([]);
  const status = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getStatuses = async () => {
    const response = await axios.get("statuses");
    statuses.value = response.data.data;
  };

  const getStatus = async (id) => {
    const response = await axios.get("statuses/" + id);
    status.value = response.data.data;
  };

  const storeStatus = async (data) => {
    try {
      await axios.post("statuses", data);
      await router.push({ name: "StatusIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateStatus = async (id) => {
    try {
      await axios.put("statuses/" + id, status.value);
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
    await axios.delete("statuses/" + id);
    await getStatuses();
  };

  return {
    status,
    statuses,
    getStatus,
    getStatuses,
    storeStatus,
    updateStatus,
    destroyStatus,
    errors,
  };
}