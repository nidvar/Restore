import { useEffect, useState } from "react";
import type {productItemType} from "./Product.type";
import ProductCard from './ProductCard';
import './ProductsList.css';

function ProductPage() {

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
    <div className="products-list">
     {
      products? 
      <>
        {products.map((item:productItemType)=>{
          return (
            <ProductCard productItem={item} key={item.id} />
          )
        })}
      </>:null
     }
    </div>
  )
}

export default ProductPage
