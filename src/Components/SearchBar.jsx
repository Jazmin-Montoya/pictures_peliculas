import { useState } from "react";
import './SearchBar.css'

const SearchBar = ([onsubmit]) =>{
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) =>{
        event.preventDefault()
        console.log('Se necesita decirle al comando papá sobre os datos')
        onsubmit(term)
    }

    const handleChange = (event) =>{
        setTerm(event.target.value)
    }

    console.log('term',term)

    return(
        <div className="search-bar">
            <form onsubmit={handleFormSubmit}>
                <label>Termino de la busqueda: </label>
                <input onChange={handleChange} value={term}/>
            </form>
        </div>
    )
}

export default SearchBar