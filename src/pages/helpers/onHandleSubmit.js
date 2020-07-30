import swal from "sweetalert";

const onHandleSubmit = (e, props, state) => {
  e.preventDefault();
  const { name, type, weight, id } = state;
  const weightInt = parseInt(weight);
  const idInt = parseInt(id);
  const arrayValidationNameAndType = [name, type];
  const arrayWeightAndIdValidation = [weightInt, idInt];

  const nameAndTypeValidation = arrayValidationNameAndType.filter((item) => {
    return item === "";
  });
  if (nameAndTypeValidation.length > 0) {
    swal("Oops", "You must complete the forms", "error");
    return;
  }
  const weightAndIdValidation = arrayWeightAndIdValidation.filter((item) => {
    return isNaN(item);
  });
  if (weightAndIdValidation.length > 0) {
    swal("Oops", "You must complete the forms", "error");
    return;
  }
  const { data } = props;
  const existingPokemonValidation = data.filter((pokemon) => {
    return pokemon.name.toLowerCase() === name.toLowerCase();
  });
  if (existingPokemonValidation.length > 0) {
    swal("Oops", "¡The name of this pokemon already exists!", "error");
  } else {
    props.dispatch({
      type: "NEW_POKEMON",
      payload: {
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
      },
    });
    swal("Congrats", "¡Now you have a new pokemon!", "success");
    setTimeout(() => {
      props.history.push("/pokemon");
    }, 2000);
  }
};
export default onHandleSubmit;
