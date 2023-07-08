import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div className="row d-flex justify-content-start align-items-center">
        {productos.map(producto => <Item key={producto.id} {...producto}/>)}
    </div>
  )
}

export default ItemList