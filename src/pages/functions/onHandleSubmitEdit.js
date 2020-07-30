import swal from "sweetalert";

const onHandleSubmitEdit = (e, props) => {
  e.preventDefault();
  const name = document.getElementById("Name").value;
  const type = document.getElementById("Type").value;
  const weight = document.getElementById("Weight").value;
  const weightInt = parseInt(weight);
  const id = document.getElementById("Id").value;
  const idInt = parseInt(id);
  const arrayValidationNameAndType = [name, type];
  const arrayValidationWeightAndId = [weightInt, idInt];
  const validationNameAndType = arrayValidationNameAndType.filter((item) => {
    return item === "";
  });
  if (validationNameAndType.length > 0) {
    swal("Oops", "You must complete the forms", "error");
    return;
  }
  const validationWeightAndId = arrayValidationWeightAndId.filter((item) => {
    return isNaN(item);
  });
  if (validationWeightAndId.length > 0) {
    swal("Oops", "You must complete the forms", "error");
    return;
  }
  const { data } = props;
  const actualName = props.match.params.pokemonName.toLowerCase();
  const removeActualPokemon = data.filter((pokemon) => {
    return pokemon.name.toLowerCase() !== actualName;
  });

  const validationExistingPokemon = removeActualPokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase() === name.toLowerCase();
  });
  if (validationExistingPokemon.length > 0) {
    swal("Oops", "¡The name of this pokemon already exists!", "error");
    return;
  } else {
    const { data } = props;

    const newDataArray = data.filter((poke) => {
      return (
        poke.name.toLowerCase() !== props.match.params.pokemonName.toLowerCase()
      ); /////////////////duda
    });
    const editedPokemon = {
      name,
      types: [
        {
          type: {
            name: type,
          },
        },
      ],
      weight: weightInt,
      id: idInt,
    };
    newDataArray.push(editedPokemon);
    props.dispatch({
      type: "EDIT_POKEMON",
      payload: newDataArray,
    });
    swal("Congrats", "¡Your pokemon was edited!", "success");
    setTimeout(() => {
      props.history.push("/badges");
    }, 2000);
  }
};
export default onHandleSubmitEdit;
