import './ItemDetails.css'

const ItemDetail = ({id, nombre, precio, img}) => {

  return (
    <div className='itemDetail col-6 container-fluid row d-flex justify-content-center align-items-center'>
      <img src={img} alt={nombre} className='col-6'/>
      <h2 className='text-center'>{nombre}</h2>
      <h3 className='text-center'>${precio}</h3>
      <h3 className='text-center'>ID: {id}</h3>
      <h3 className='text-center'>Unidades Disponibles: 10</h3>
    </div>
  )
}

export default ItemDetail