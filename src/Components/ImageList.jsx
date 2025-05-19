import ImageShow from './ImageShow'
import './ImageList.css'

const ListaImagenes = ({imagenes}) => {
    const RenderImagen = imagenes.map((imagenes) => {
        return<ImageShow key={imagenes.id} imagenes={imagenes} />
    })
    return (
        <div className="imagenes-lista">
            {RenderImagen}
        </div>
    )
}

export default ListaImagenes 