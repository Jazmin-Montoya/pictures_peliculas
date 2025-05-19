const ImageShow = ({imagenes}) =>{
    return(
        <div>
            <img src = {imagenes.urls.small} alt={imagenes.alt_description}/>
        </div>
    )
}

export default ImageShow