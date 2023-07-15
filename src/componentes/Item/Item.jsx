import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, stock }) => {
  return (

    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2 d-flex justify-content-center">

      <div className="item d-flex justify-content-center row ">
        <img src={img} alt={nombre} className="imgCard col-6" />
        <h3 className="text-center col-12 p-0 m-0">{nombre}</h3>
        <p className="text-center col-12 p-0 m-0">${precio}</p>
        <p className="text-center col-12 p-0 m-0">Stock: {stock}</p>
        <Link to={`/item/${id}`} className="col-8 d-flex justify-content-center align-items-center">
          <button type="button" className="btn btn-outline-light">Ver Detalles</button>
        </Link>
      </div>

    </div>
  )
}
  
export default Item