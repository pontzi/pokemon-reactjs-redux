import { useState } from "react";

const useOnChangeQuery = () => {
  const [query, setQuery] = useState({ value: "" });
  const onChangeQuery = (e) => {
    setQuery({
      ...query,
      value: e.target.value,
    });
  };
  return [query, onChangeQuery];
};

export default useOnChangeQuery;
