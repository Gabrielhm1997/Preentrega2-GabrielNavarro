import { useState, createContext } from 'react';

export const contextCart = createContext({
    carrito: [],
    totalPrecio: 0,
    cantidadProductos: 0
})

export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [totalPrecio, setTotalPrecio] = useState(0);
    const [cantidadProductos, setCantidadProductos] = useState(0);

    console.log(carrito);

    const agregarProducto = (item, cantidad) => {
        const productoEncontrado = carrito.find(producto => producto.item.id === item.id);

        if(!productoEncontrado) {
            setCarrito(prev => [...prev, {item, cantidad}]);
            setCantidadProductos(prev => prev + cantidad);
            setTotalPrecio(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map ( producto => {
                if (producto.item.id === item.id) {
                    return {...producto, cantidad: producto.cantidad + cantidad};
                } else {
                    return producto;
                }
            })
            setCarrito(carritoActualizado);
            setCantidadProductos(prev => prev + cantidad);
            setTotalPrecio(prev => prev + (item.precio * cantidad));
        }
    }

    const eliminarProducto = (id) => {
        const productoEncontrado = carrito.find(producto => producto.item.id === item.id);
        const carritoActualizado = carrito.filter(producto => producto.item.id != id);
        setCarrito(carritoActualizado);
        setCantidadProductos(prev => prev - productoEncontrado.cantidad);
        setTotalPrecio(prev => prev - (productoEncontrado.item.precio * productoEncontrado.cantidad));

    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadProductos(0);
        setTotalPrecio(0);
    }

    return (
        <contextCart.Provider value={{carrito, totalPrecio, cantidadProductos, agregarProducto,
        eliminarProducto, vaciarCarrito}}>
            {children}
        </contextCart.Provider>
    )
}