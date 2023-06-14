import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos } from "../../asyncmock";

const ItemListContainer = ({ titulo }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos()
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h2 className="text-center">{titulo}</h2>
            
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer