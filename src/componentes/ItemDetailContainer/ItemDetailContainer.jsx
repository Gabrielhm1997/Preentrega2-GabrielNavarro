import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore"; 

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    const { idItem } = useParams();
 
    useEffect( () => {

        const nuevoDoc = doc(db, "inventario", idItem);

        getDoc(nuevoDoc)
          .then(respuesta => {setProducto({id: respuesta.id, ...respuesta.data()})})
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