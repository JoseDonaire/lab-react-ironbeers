
import './App.css';
import Home from './pages/Home';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeers from './pages/RandomBeers';
import BeersDetails from './pages/BeersDetails';
import {Routes , Route} from"react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<Beers/>}/>
        {/*<Route path='/beers/:id'>{<BeersDetails/>}</Route> roto aqui no se por qué */ }
        <Route path='/beers/random' element={<RandomBeers/>}/>
        <Route path='/beers/new' element={<NewBeer/>}/>
      

      </Routes>

    </div>
  );
}

export default App;
