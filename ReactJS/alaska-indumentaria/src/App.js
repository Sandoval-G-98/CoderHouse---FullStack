import './App.css';
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './containers/itemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Cart} from './components/cart/Cart'
import {CartProvider} from './components/context/CartContext'
function App() {
  return (
    <>
        <CartProvider>
          <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
              <Route path = "/" element = "Hola inicio"></Route>
              <Route path = "/man" element = {<ItemListContainer genre = "man"/>}></Route>
              <Route path = "/woman" element =  {<ItemListContainer genre = "woman"/>}></Route>
              <Route path = "/contact" element = "Hola contacto"></Route>
              <Route path = "/cart" element = {<Cart></Cart>}></Route>
              <Route path = "/man/:itemId" element = {<ItemDetailContainer genre = "man"/>}></Route>
              <Route path = "/woman/:itemId" element =  {<ItemDetailContainer genre = "woman"/>}></Route>
            </Routes>
          </BrowserRouter>  
        </CartProvider>
    </>
  );
}

export default App;

