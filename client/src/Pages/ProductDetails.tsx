import { useEffect, useState } from "react";
import type {productItemType} from "../Components/Product/Product.type";
import './ProductsList.css';

function ProductDetails({id}: {id: string}) {

  const [product, setProduct] = useState<productItemType>();

  useEffect(()=>{
    fetch("https://localhost:5001/api/products" + id)
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      setProduct(res);
      console.log(product);
    });
  }, []);

  return (
    <div className="products-list">
     <h1>Product details</h1>
    </div>
  )
}

export default ProductDetails
