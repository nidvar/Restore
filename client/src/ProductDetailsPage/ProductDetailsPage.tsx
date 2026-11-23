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
          <div className="product-details-right-side">
            <h1>{product.name}</h1>
            <p><strong>${product.price/100}</strong></p>
            <div className="product-details-table">
              <div className="product-details-table-fields">
                <p>Name</p>
                <p>Description</p>
                <p>Type</p>
                <p>Brand</p>
                <p>Quantity</p>
              </div>
              <div className="product-details-table-content">
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.type}</p>
                <p>{product.brand}</p>
                <p>In stock: {product.quantityInStock}</p>
              </div>
            </div>
          </div>
        </div>: null
      }
    </div>
  )
}

export default ProductDetailsPage
