import { useState, useEffect } from "react";
import { useSelect } from "react-supabase";

const useData = (tableName, columns, filter) => {
  const [{ data: fetchedData, error: fetchedError, fetching }, reexecute] =
    useSelect(tableName, {
      columns: columns,
      filter: filter,
    });

  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: false,
  });

  useEffect(() => {
    setState({ data: fetchedData, error: fetchedError, isLoading: fetching });
  }, [fetchedData, fetchedError, fetching]);

  const loadData = () => {
    const { data, error, fetching: isLoading } = reexecute();
    setState({ data, error, isLoading });
  };

  return { ...state, loadData };
};

export { useData };
