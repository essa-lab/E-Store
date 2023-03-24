import './App.css';
import React from 'react';
import { getCategories,} from './fetcher';
import Product from './components/Product';
import Checkout from './components/Checkout';
import Basket from './components/Basket';
import Category from './components/Category';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Layout from './components/layout';

function App() {
  const [categories, setCategories] = React.useState({errorMessage:'',data:[]});
 
  React.useEffect(()=>{
    const fetchDate = async () =>{
      const responseObj= await getCategories();
      setCategories(responseObj);
    }
    fetchDate();
  },[])


  return (
    <React.Fragment>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout categories={categories}/>}>
         <Route index element={<Home />}/>
         <Route path="checkout" element={<Checkout />}/>
         <Route path="basket" element={<Basket />}/>
         <Route path="products/:productId" element={<Product />}/>
         <Route path="categories/:categoryId" element={<Category />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    </React.Fragment>
  );
}

export default App;
