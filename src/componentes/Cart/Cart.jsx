import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import { CartItem } from "../CartItem/CartItem"
import './Cart.css'
export const Cart = () => {

    const { carrito, vaciarCarrito, precioTotal, cantidadProductos } = useContext(CarritoContext);

    if (cantidadProductos === 0) {
        return (
            <>
                <h2 className="text-center m-2">No hay productos en el carrito</h2>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center justify-content-center">
                        <Link to="/" className=" col-2 p-0">
                            <button className="btn btn-outline-light btn-carritovacio">Ver Productos</button>
                        </Link>
                    </div>
                </div>


            </>
        )
    }

    return (
        <>
            <h2 className="text-center m-2">CARRITO</h2>

            <div className="cart-container container-fluid p-5">
                <div className="row">
                    <h3 className="col-7 text-center m-0 p-0">Producto</h3>
                    <h3 className="col-2 text-center m-0 p-0">Precio</h3>
                    <h3 className="col-2 text-center m-0 p-0">Cantidad</h3>
                    <p className="col-1"></p>
                </div>
                {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
                <div className="row d-flex align-items-center justify-content-end">
                    <h3 className="col-2 text-end">Productos: {cantidadProductos}</h3>
                    <h3 className="col-2 text-end">Total: ${precioTotal}</h3>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <button onClick={() => vaciarCarrito()} className="btn btn-outline-light m-1">Vaciar Carrito</button>
                    <Link to="/checkout"><button className="btn btn-outline-light m-1">Finalizar Compra</button></Link>
                </div>

            </div>
        </>

    )
}
