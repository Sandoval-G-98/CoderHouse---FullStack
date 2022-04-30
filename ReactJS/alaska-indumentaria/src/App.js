import './App.css';
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <ItemListContainer></ItemListContainer>
      </div>
    </>
  );
}

export default App;
