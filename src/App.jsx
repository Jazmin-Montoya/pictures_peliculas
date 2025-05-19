import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";
import searchImagenes from './api'

function App(){
  const [imagenes, setImagenes] = useState([])

  const handleSubmit = async(term) =>{
    console.log('Usted esta buscando con: ',term)
    const result = await searchImagenes(term)
    setImagenes(result)
  }
  return(
    <>
      <h1>Pictures Películas</h1>
      <SearchBar onSubmit = {handleSubmit}/>
      <ImageList imagenes = {imagenes}/>
    </>
  )
}

export default App