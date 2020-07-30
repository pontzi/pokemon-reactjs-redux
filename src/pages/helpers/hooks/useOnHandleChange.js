import { useState, useEffect } from "react";

const useOnHandleChange = (pokeData) => {
  const [state, setState] = useState({ ...pokeData });

  useEffect(() => {
    if (state.id === "") {
      setState({ id: 1 });
    }
  }, [state.id]);

  const onHandleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return [state, onHandleChange];
};
export default useOnHandleChange;
