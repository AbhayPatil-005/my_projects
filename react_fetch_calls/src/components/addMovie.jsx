import { useState } from "react";

const AddMovie = () =>{
    const [movie, setMovie] = useState({
        title:"",
        openingText:"",
        releaseDate:"",
    })

    const changeHandler=(e)=>{

        setMovie({
            ...movie, 
            [e.target.name]: e.target.value
        })
    }
    const addMovieHandler = (e)=>{
            e.preventDefault()
            console.log(movie)
            setMovie({
                title: "",
                openingText: "",
                releaseDate: ""
                });
    }
    return (
        <>
            <form>
                <div>
                    <label>Title 
                        <input 
                        type="text"
                        name="title"
                        value={movie.title} 
                        onChange={changeHandler}
                        /></label>
                </div>
                <div>
                    <label htmlFor="openingText">Opening Text</label>
                        <textarea 
                        id="openingText"
                        name="openingText"
                        value={movie.openingText}
                        onChange={changeHandler}
                        />
                </div>
                <div>
                    <label>Title 
                        <input 
                        type="text"
                        name="releaseDate"
                        value={movie.releaseDate}
                        onChange={changeHandler}
                                 /></label>
                </div>       
                <button type="submit" onClick={addMovieHandler}>Add Movie</button>
            </form>
        </>
    )
}

export default AddMovie