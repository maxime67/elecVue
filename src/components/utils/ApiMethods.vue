<script>

import axios from "axios";

const apiClient = axios.create({
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const fetchTrackData = async (error, loading, data) => {
  try {
    loading.value = true;
    error.value = null;

    // First attempt: Regular axios call with custom instance
    try {
      const response = await apiClient.get(import.meta.env.VITE_APIURL);
      data.value = response.data;
      return;
    } catch (axiosError) {
      console.log('Primary fetch attempt failed, trying fallback:', axiosError.message);
    }

    // Second attempt: Using fetch API as fallback
    try {
      const response = await fetch(import.meta.env.VITE_APIURL, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors', // Try with CORS mode
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      data.value = await response.json();
      console.log(data.value);
      return;
    } catch (fetchError) {
      console.log('Fetch API attempt failed:', fetchError.message);
    }

    // If both attempts fail, throw error
    throw new Error('All fetch attempts failed');

  } catch (err) {
    error.value = `Error loading track data: ${err.message}`;
    console.error('Error fetching track data:', err);
  } finally {
    loading.value = false;
  }
};
</script>