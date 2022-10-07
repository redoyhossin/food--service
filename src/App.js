import './App.css';
import Header from './header/Header';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './home/Home';
import About from './about/About';
import Blog from './blog/Blog';
import Shop from './shop/Shop';
import SingleShop from './shop/singleshope/SingleShop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/SingleShop' loader={async () => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/categories ${SingleShop}`)
         }} element={<SingleShop/>} />

      </Routes>

    </div>

  );
}


export default App;
