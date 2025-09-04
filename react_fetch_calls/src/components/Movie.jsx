export const Movie = (props) => {
  console.log(props.title)
  const movieDeleteHandler = async()=>{
    const response = await fetch(`https://react-project-fd0a2-default-rtdb.firebaseio.com/movies/${props.id}.json`,{
      method:'Delete',
    })
    if(!response.ok){
      console.error("Failed to delete movie")
    }
    props.onUpdate()
  }
    return (
    <li key={props.id}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={movieDeleteHandler}>Delete</button>
    </li>
  );
};
