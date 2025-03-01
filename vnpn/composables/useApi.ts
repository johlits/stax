export const useApi = () => {
  const fetchHello = async () => {
    try {
      return await $fetch('/api/hello');
    } catch (error) {
      console.error('Error fetching hello data:', error);
      throw error;
    }
  };

  return {
    fetchHello
  };
};
