
import { useEffect, useRef } from 'react';

/**
 * A custom hook that provides a declarative way to set intervals
 * @param callback Function to call on each interval
 * @param delay Time in ms between intervals, null to pause
 */
export default function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(callback);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (delay === null) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}
