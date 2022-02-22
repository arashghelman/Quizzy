import { useState, useEffect, useRef } from "react";

export const useAPI = (callback) => {
  const callbackRef = useRef(callback);

  const [fetchStatus, setFetchStatus] = useState({
    data: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => (callbackRef.current = callback), [callback]);

  useEffect(() => {
    callbackRef
      .current()
      .then((result) => {
        setFetchStatus((current) => ({
          ...current,
          data: result.data,
          error: null,
        }));
      })
      .catch((error) => {
        setFetchStatus((current) => ({ ...current, data: null, error: error }));
      })
      .finally(() =>
        setFetchStatus((current) => ({ ...current, isLoading: false }))
      );
  }, []);

  return fetchStatus;
};
