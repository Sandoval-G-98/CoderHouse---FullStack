import './App.css';
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './containers/itemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path = "/" element = "Hola inicio"></Route>
            <Route path = "/man" element = {<ItemListContainer genre = "man"/>}></Route>
            <Route path = "/woman" element =  {<ItemListContainer genre = "woman"/>}></Route>
            <Route path = "/contact" element = "Hola contacto"></Route>
            <Route path = "/cart" element = "Hola Carrito"></Route>
            <Route path = "/man/:itemId" element = {<ItemDetailContainer genre = "man"/>}></Route>
            <Route path = "/woman/:itemId" element =  {<ItemDetailContainer genre = "woman"/>}></Route>
          </Routes>
        </BrowserRouter>  
    </>
  );
}

export default App;

