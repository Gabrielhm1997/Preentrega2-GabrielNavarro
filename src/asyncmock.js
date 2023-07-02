const productos = [
    { categoria: "palitos", id: 0, stock: 5, nombre: "Bombom Palito", precio: 350, img: "/img/palito-bombom.jpg" },
    { categoria: "palitos", id: 1, stock: 10, nombre: "Palitos Frutales", precio: 100, img: "/img/palito-frutales.jpg" },
    { categoria: "palitos", id: 2, stock: 10, nombre: "Caripela Chocolate", precio: 250, img: "/img/palito-caripelachoco.jpg" },
    { categoria: "palitos", id: 3, stock: 10, nombre: "Caripela Frutilla", precio: 200, img: "/img/palito-caripelafrutilla.jpg" },
    { categoria: "palitos", id: 4, stock: 10, nombre: "Dulce de Leche", precio: 300, img: "/img/palito-dulceDeLeche.jpg" },
    { categoria: "palitos", id: 5, stock: 10, nombre: "Magic Frutilla", precio: 400, img: "/img/palito-magicFrutilla.jpg" },

    { categoria: "baldes", id: 6, stock: 10, nombre: "Bon o Bon", precio: 850, img: "/img/balde-BonOBon.jpg" },
    { categoria: "baldes", id: 7, stock: 10, nombre: "Cadbury", precio: 1000, img: "/img/balde-Cadbury.jpg" },
    { categoria: "baldes", id: 8, stock: 10, nombre: "Cofler Dulce de Leche", precio: 700, img: "/img/balde-coflerDulceleche.jpg" },
    { categoria: "baldes", id: 9, stock: 10, nombre: "Tentacion Americana", precio: 550, img: "/img/balde-tentacionAmericana.jpg" },
    { categoria: "baldes", id: 10, stock: 10, nombre: "Tentacion Chocolate", precio: 500, img: "/img/balde-tentacionChocolate.jpg" },
    { categoria: "baldes", id: 11, stock: 10, nombre: "Tentacion Menta Granizada", precio: 600, img: "/img/balde-tentacionMenta.jpg" },

    { categoria: "postres", id: 12, stock: 10, nombre: "Banana Split", precio: 1500, img: "/img/postre-bananaSplit.jpg" },
    { categoria: "postres", id: 13, stock: 10, nombre: "Brownie", precio: 1750, img: "/img/postre-brownie.jpg" },
    { categoria: "postres", id: 14, stock: 10, nombre: "Lemon Pie", precio: 1400, img: "/img/postre-lemonPie.jpg" },
    { categoria: "postres", id: 15, stock: 10, nombre: "Oreo", precio: 2000, img: "/img/postre-oreo.jpg" },
    { categoria: "postres", id: 16, stock: 10, nombre: "Rollo Helado", precio: 1500, img: "/img/postre-rolloHelado.jpg" },
    { categoria: "postres", id: 17, stock: 10, nombre: "Tofi", precio: 2500, img: "/img/postre-tofi.jpg" },
]

export const getProductos = () => {
    return new Promise((respuesta) => {
        setTimeout(() => {
            respuesta(productos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise (respuesta => {
        setTimeout( () => {
            const producto = productos.find(producto => producto.id === id);
            respuesta(producto);
        }, 100)
    })
}

export const getCategoria = (idCategoria) => {
    return new Promise ((respuesta) => {
     setTimeout( () => {
        const productosCategoria = productos.filter(producto => producto.categoria === idCategoria);
        respuesta(productosCategoria);
     }, 100)   
    })
}