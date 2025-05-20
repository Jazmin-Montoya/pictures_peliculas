import { useState } from "react"
import './SearchBar.css'

const SearchBar = ([onSubmit]) =>{
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) =>{
        event.preventDefault()
        console.log('Se necesita decirle al comando papá sobre os datos')
        onSubmit(term)
    }

    const handleChange = (event) =>{
        setTerm(event.target.value)
    }

    console.log('term',term)

    return(
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Termino de la busqueda: </label>
                <input onChange={handleChange} value={term}/>
            </form>
        </div>
    )
}

export default SearchBar