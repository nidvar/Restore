import { useEffect, useState } from "react";
import type {productItemType} from "../Components/Product/Product.type"
import { useParams } from "react-router";

import './ProductDetailsPage.css';

function ProductDetailsPage() {
  const params = useParams();
  const [product, setProduct] = useState<productItemType>();

  useEffect(()=>{
    fetch("https://localhost:5001/api/products/" + params.id)
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      setProduct(res);
    });
  }, [params.id]);

  return (
    <div className="page"> 
      {
        product?
        <div className="product-details-container">
          <img src={product.pictureUrl} className="product-details-image"/>
          <h2>{product.name}</h2>
          <p>{product.brand}</p>
          <p>{product.price}</p>
          <p>{product.quantityInStock}</p>
        </div>: null
      }
    </div>
  )
}

export default ProductDetailsPage
