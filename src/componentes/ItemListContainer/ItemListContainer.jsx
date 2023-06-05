
const ItemListContainer = ({titulo, lista}) => {
    return (
        <>
            <h2 className="text-center">
                {titulo}
            </h2>

            <p class="text-center">{lista}</p>
        </>
    )
}

export default ItemListContainer