import { db } from "./services/config.js"
import { doc, setDoc } from "firebase/firestore";

const productos = [

    { id: 1, item: { categoria: "palitos", stock: 100, nombre: "Bombom Palito", precio: 350, img: "/img/palito-bombom.jpg", descripcion: "Palito Bombom Helado x 1U" } },
    { id: 2, item: { categoria: "palitos", stock: 100, nombre: "Palitos Frutales", precio: 100, img: "/img/palito-frutales.jpg", descripcion: "Palito Frutal x 1U" } },
    { id: 3, item: { categoria: "palitos", stock: 100, nombre: "Caripela Chocolate", precio: 250, img: "/img/palito-caripelachoco.jpg", descripcion: "Palito Caripela Chocolate x 1U" } },
    { id: 4, item: { categoria: "palitos", stock: 100, nombre: "Caripela Frutilla", precio: 200, img: "/img/palito-caripelafrutilla.jpg", descripcion: "Palito Caripela Frutilla x 1U" } },
    { id: 5, item: { categoria: "palitos", stock: 100, nombre: "Dulce de Leche", precio: 300, img: "/img/palito-dulceDeLeche.jpg", descripcion: "Palito Dulce de Leche x 1U" } },
    { id: 6, item: { categoria: "palitos", stock: 100, nombre: "Magic Frutilla", precio: 400, img: "/img/palito-magicFrutilla.jpg", descripcion: "Palito Magic Frutilla x 1U" } },

    { id: 7, item: { categoria: "baldes", stock: 100, nombre: "Bon o Bon", precio: 850, img: "/img/balde-BonOBon.jpg", descripcion: "Balde 1Lt Bon o Bon" } },
    { id: 8, item: { categoria: "baldes", stock: 100, nombre: "Cadbury", precio: 1000, img: "/img/balde-Cadbury.jpg", descripcion: "Balde 1Lt Cadbury" } },
    { id: 9, item: { categoria: "baldes", stock: 100, nombre: "Cofler Dulce de Leche", precio: 700, img: "/img/balde-coflerDulceleche.jpg", descripcion: "Balde 1Lt Cofler Dulce de Leche" } },
    { id: 10, item: { categoria: "baldes", stock: 100, nombre: "Tentacion Americana", precio: 550, img: "/img/balde-tentacionAmericana.jpg", descripcion: "Balde 1Lt Tentación Americana" } },
    { id: 11, item: { categoria: "baldes", stock: 100, nombre: "Tentacion Chocolate", precio: 500, img: "/img/balde-tentacionChocolate.jpg", descripcion: "Balde 1Lt Tentación Chocolate" } },
    { id: 12, item: { categoria: "baldes", stock: 100, nombre: "Tentacion Menta Granizada", precio: 600, img: "/img/balde-tentacionMenta.jpg", descripcion: "Balde 1Lt Tentación Menta Granizada" } },

    { id: 13, item: { categoria: "postres", stock: 100, nombre: "Banana Split", precio: 1500, img: "/img/postre-bananaSplit.jpg", descripcion: "Postre Banana Split x 1Kg" } },
    { id: 14, item: { categoria: "postres", stock: 100, nombre: "Brownie", precio: 1750, img: "/img/postre-brownie.jpg", descripcion: "Postre Brownie x 12U" } },
    { id: 15, item: { categoria: "postres", stock: 100, nombre: "Lemon Pie", precio: 1400, img: "/img/postre-lemonPie.jpg", descripcion: "Postre Lemon Pie x 1Kg" } },
    { id: 16, item: { categoria: "postres", stock: 100, nombre: "Oreo", precio: 2000, img: "/img/postre-oreo.jpg", descripcion: "Postre Oreo x 1Kg" } },
    { id: 17, item: { categoria: "postres", stock: 100, nombre: "Rollo Helado", precio: 1500, img: "/img/postre-rolloHelado.jpg", descripcion: "Postre Rollo Helado x 1Kg" } },
    { id: 18, item: { categoria: "postres", stock: 100, nombre: "Tofi", precio: 2500, img: "/img/postre-tofi.jpg", descripcion: "Postre Tofi x 1Kg" } },
]

export const cargarProductos = () => {

    productos.map(async (producto) => {

        let id = producto.id.toString()

        let data = { ...producto.item }

        // console.log(id)
        // console.log(typeof(id))
        // console.log(data)

        await setDoc(doc(db, "inventario", id), data)
            .then(res => console.log("Producto cargado"))
            .catch(error => console.log(error))
        // addDoc(collection(db, "inventario"), producto)
        //     .catch(error => console.log(error));

    })
}


// export const getProductos = () => {
//     return new Promise((respuesta) => {
//         setTimeout(() => {
//             respuesta(productos);
//         }, 100)
//     })
// }


// export const getUnProducto = (id) => {
//     return new Promise (respuesta => {
//         setTimeout( () => {
//             const producto = productos.find(producto => producto.id === id);
//             respuesta(producto);
//         }, 100)
//     })
// }

// export const getCategoria = (idCategoria) => {
//     return new Promise ((respuesta) => {
//      setTimeout( () => {
//         const productosCategoria = productos.filter(producto => producto.categoria === idCategoria);
//         respuesta(productosCategoria);
//      }, 100)
//     })
// }
