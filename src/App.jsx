import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import './App.css'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer titulo = {"Productos"} lista = {"Helados"}/>
    </>
  )
}

export default App