import './App.css';
import React from 'react';
import Category from './components/Category';
import { getCategories,getProducts } from './fetcher';
import CategoryProduct from './components/CategoryProduct';
function App() {
  const [categories, setCategories] = React.useState({errorMessage:'',data:[]});
  const [products, setProducts] = React.useState({errorMessage:'',data:[]});
  React.useEffect(()=>{
    const fetchDate = async () =>{
      const responseObj= await getCategories();
      setCategories(responseObj);
    }
    fetchDate();
  },[])
  const handleCategoryClick = id =>{
    const fetchDate = async () =>{
      const responseObj= await getProducts(id)
      setProducts(responseObj);
    }
    fetchDate();
}
  const renderCategories=()=>{
    return categories.data.map(c=>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={()=>handleCategoryClick(c.id)}/>
      )
  };
  const renderProducts =()=>{
    return products.data.map(p => 
      <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
    )
  }
  return (
    <React.Fragment>
    <header>MyStore</header>
    <section>
       <nav>
        {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
        {categories.data &&
        renderCategories()
        }
      </nav>
      <main>
        <h1>Products</h1>
        {products.errorMessage && <div>Error: {products.errorMessage}</div>}
        {products && renderProducts()}
        </main>
    </section>
      <footer> footer </footer>
    
    </React.Fragment>
  );
}

export default App;
