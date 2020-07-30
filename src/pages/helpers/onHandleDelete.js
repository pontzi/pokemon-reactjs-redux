import swal from "sweetalert";

const onHandleDelete = (e, props) => {
  e.preventDefault();

  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this pokemon!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      const { data } = props;
      const newDataArray = data.filter((poke) => {
        return (
          poke.name.toLowerCase() !==
          props.match.params.pokemonName.toLowerCase()
        );
      });
      props.dispatch({
        type: "DELETE_POKEMON",
        payload: newDataArray,
      });
      swal("Poof! Your pokemon has been deleted!", {
        icon: "success",
      });
      setTimeout(() => {
        props.history.push("/pokemon");
      }, 2000);
    } else {
      swal("Your pokemon is safe!");
    }
  });
};
export default onHandleDelete;
