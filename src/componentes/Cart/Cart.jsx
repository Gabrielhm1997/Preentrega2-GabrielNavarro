import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import { CartItem } from "../CartItem/CartItem"

export const Cart = () => {

    const { carrito, vaciarCarrito, precioTotal, cantidadProductos } = useContext(CarritoContext);

    if (cantidadProductos === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">
                    Ver Productos
                </Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)}
            <h3>Total: ${precioTotal}</h3>
            <h3>Productos: {cantidadProductos}</h3>
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    )
}
