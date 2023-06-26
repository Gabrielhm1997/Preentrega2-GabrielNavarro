import { useState, useEffect } from "react"
import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    const { idItem } = useParams();

    useEffect(() => {
        getUnProducto(parseInt(idItem))
            .then(respuesta => setProducto(respuesta))
            .catch(error => console.log(error))
    }, [idItem]);

  return (
    <div className="container-fluid row d-flex justify-content-center m-0 p-0">
        <h2 className="text-center col-12">Detalles del Producto</h2>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer