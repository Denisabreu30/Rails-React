import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
import Home from './screens/home';
import Restaurants from './screens/restaurants';
import ShowRestaurant from './screens/show_restaurant';
import ShowOrder from './screens/show_order';
import history from './history';
import CreateOrder from './screens/create_order';

const App = () => (
  <BrowserRouter history={history}>
  <Routes>
    <Route exact path='/'element={<Home/>}  />
    <Route exact path='/restaurants'element={<Restaurants/>} />
    <Route exact path='/restaurants/:id'element={<ShowRestaurant/>} />
    <Route exact path='/orders/new'element={<CreateOrder/>} />
    <Route exact path='/orders/:id'element={<ShowOrder/>} />
  </Routes>
</BrowserRouter>
);
 
export default App;