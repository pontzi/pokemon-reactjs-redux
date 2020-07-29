import swal from "sweetalert";

function onHandleSubmit(e, props) {
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
  const validationExistingPokemon = data.filter((pokemon) => {
    return pokemon.name.toLowerCase() === name.toLowerCase();
  });
  if (validationExistingPokemon.length > 0) {
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
      props.history.push("/badges");
    }, 2000);
  }
}
export default onHandleSubmit;
