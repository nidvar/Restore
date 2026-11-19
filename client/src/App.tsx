import { useEffect, useState } from "react";
import type {productItemType} from './Components/Product/Product.type';
import ProductCard from "./Components/Product/ProductCard";

function App() {

  const [products, setProducts] = useState<productItemType[]>();

  useEffect(()=>{
    fetch("https://localhost:5001/api/products")
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      setProducts(res);
    });
  }, []);

  return (
    <>
     <h1>.NET C#</h1>
     {
      products? 
      <>
        {products.map((item:productItemType)=>{
          return (
            <ProductCard props={item} key={item.id} />
          )
        })}
      </>:null
     }
    </>
  )
}

export default App
