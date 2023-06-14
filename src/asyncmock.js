const productos = [
    { id: 0, nombre: "Bombom Palito", precio: 100, img: "/img/bombon-palito.jpg" },
    { id: 1, nombre: "Palito Helado", precio: 75, img: "/img/palitos-helados.jpg" },
    { id: 2, nombre: "Postre Helado", precio: 350, img: "/img/postre-helado.jpg" },
    { id: 3, nombre: "Tentacion", precio: 500, img: "/img/tentacion-helado.jpg" },
    { id: 4, nombre: "Topping", precio: 50, img: "/img/topping-helado.jpg" },
    { id: 5, nombre: "Torta Helada", precio: 400, img: "/img/torta-helada.jpg" },
]

export const getProductos = () => {
    return new Promise((respuesta) => {
        setTimeout(() => {
            respuesta(productos);
        }, 2000)
    })
}


export const getUnProducto = (id) => {
    return new Promise (respuesta => {
        setTimeout( () => {
            const producto = productos.find(producto => producto.id === id);
            respuesta(producto);
        }, 2000)
    })
}