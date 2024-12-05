import { useState, useEffect } from "react";
/**
 * A custom hook to debounce a value by a specified delay.
 *
 * @param {any} value - The input value to be debounced.
 * @param {number} delay - The delay in milliseconds for debouncing.
 *
 * @returns {any} - The debounced value, updated after the specified delay.
 */
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
