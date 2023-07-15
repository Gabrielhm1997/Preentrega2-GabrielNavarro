import { useState, useContext } from "react";
import { CarritoContext } from '../../context/CarritoContext';
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import './Checkout.css'

const Checkout = () => {
    const { carrito, vaciarCarrito, precioTotal, cantidadProductos } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const manejadorFormulario = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email deben coincidir");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: precioTotal,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {

                const productoRef = doc(db, "inventario", productoOrden.id);

                const productoDoc = await getDoc(productoRef);

                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                        setError("");
                    })
                    .catch((error) => {
                        console.log("Error al crear la orden", error);
                        setError("Error al crear la orden, intente más tarde");
                    })
            })
            .catch((error) => {
                console.log("Error al actualizar el stock.", error);
                setError("Error al actualizar el stock. Intente nuevamente");
            })
    }

    return (
        <div className="container-fluid">
            <h2 className="text-center">Checkout</h2>
            <div className="checkout-container row">
                {
                    cantidadProductos === 0 ?
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
                        
                        :

                        <>
                            <div className="col-6 container-fluid p-2">
                                <h3 className="text-center"> Ingrese sus datos</h3>
                                <form onSubmit={manejadorFormulario}>
                                    <div className="row mb-2">
                                        <label className="col-6 text-end" htmlFor="nombre" > Nombre </label>
                                        <input className="col-5" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                    </div>

                                    <div className="row mb-2">
                                        <label className="col-6 text-end" htmlFor=""> Apellido </label>
                                        <input className="col-5" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                                    </div>

                                    <div className="row mb-2">
                                        <label className="col-6 text-end" htmlFor=""> Telefono </label>
                                        <input className="col-5" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                                    </div>

                                    <div className="row mb-2">
                                        <label className="col-6 text-end" htmlFor=""> Email </label>
                                        <input className="col-5" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                    <div className="row mb-2">
                                        <label className="col-6 text-end" htmlFor=""> Email Confirmación </label>
                                        <input className="col-5" type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                                    </div>

                                    {
                                        error && <p className="text-center" style={{ color: "red" }}> {error} </p>
                                    }
                                    <div className="d-flex justify-content-center align-item-center mt-3">
                                        <button className="btn btn-outline-light" type="submit"> Finalizar Compra </button>
                                    </div>
                                </form>
                            </div>
                            <div className="container-fluid p-2 col-6">
                                <h3 className="text-center">Resumen de su Carrito</h3>
                                <ul>
                                    {carrito.map(producto => (
                                        <div key={producto.item.id}>
                                            <li>
                                                <p> {producto.item.nombre} x {producto.cantidad} ${producto.item.precio}c/u</p>
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </>
                }
                <div className="container-fluid d-flex justify-content-center align-item-center">
                    {
                        ordenId && (
                            <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkout