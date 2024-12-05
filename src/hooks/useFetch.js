import { useState, useEffect, useCallback } from "react";
/**
 * A custom hook to fetch data from an API and manage loading, error, and success states.
 *
 * @param {string} url - The API endpoint to fetch data from.
 * @param {object} [options] - Optional fetch configuration (e.g., headers, method).
 *
 * @returns {object} - An object containing:
 *   - data: The fetched data (null initially).
 *   - loading: A boolean indicating the loading state.
 *   - error: An error message if the fetch fails (null initially).
 *   - refetch: A function to manually trigger the fetch.
 */
const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!url) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
