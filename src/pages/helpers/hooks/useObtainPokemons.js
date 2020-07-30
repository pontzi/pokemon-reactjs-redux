import { useState, useEffect } from "react";
const useObtainPokemons = (props) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
  });

  let apiPoke = "https://pokeapi.co/api/v2/pokemon/id/";

  useEffect(() => {
    if (props.data.length === 0) {
      const array = [25, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      obtainPokemon(array);
    } else {
      setState({
        ...state,
        loading: false,
      });
    }
  }, []);

  const obtainID = async (id) => {
    const url = `${apiPoke.replace("id", id)}`;
    try {
      setState({
        ...state,
        loading: true,
        error: null,
      });
      const response = await fetch(url);
      const onResponse = await response.json();
      setState({
        ...state,
        loading: false,
      });
      return onResponse;
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error,
      });
      console.log(error.message);
    }
  };
  const obtainPokemon = async (IdsArray) => {
    try {
      setState({
        ...state,
        loading: true,
        error: null,
      });
      const promiseArray = IdsArray.map((id) => obtainID(id));
      const arrayPokemonNames = await Promise.all(promiseArray);
      props.dispatch({
        type: "SEND_DATA",
        payload: arrayPokemonNames,
      });

      setState({
        ...state,
        loading: false,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error,
      });
    }
  };
  return state;
};
export default useObtainPokemons;
