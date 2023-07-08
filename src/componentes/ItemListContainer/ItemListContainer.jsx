import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({}) => {

    const [productos, setProductos] = useState([]);

    const { categoria } = useParams();

    useEffect(() => {

        const funcionProductos = categoria ? getCategoria : getProductos;

        funcionProductos(categoria)
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
    }, [categoria])

    return (
        <>
            <h2 className="text-center m-2">{categoria ? categoria.toUpperCase() : "PRODUCTOS"}</h2>

            <div className="container-fluid">
                <ItemList productos={productos} />
            </div>

        </>
    )
}

export default ItemListContainer