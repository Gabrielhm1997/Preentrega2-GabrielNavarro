import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div>
        <img src={img} alt={nombre} className=""/>
        <h3 className="text-center">{nombre}</h3>
        <p className="text-center">${precio}</p>
        <button className="text-center">Ver Detalles</button>
    </div>
  )
}

export default Item