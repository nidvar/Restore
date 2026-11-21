import { useEffect, useState } from "react";
import type {productItemType} from "../Components/Product/Product.type"
import { useParams } from "react-router";

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
  }, []);

  return (
    <div> 
      <div className="products-list">
        <p>{product?.name}</p>
      </div>
    </div>
  )
}

export default ProductDetailsPage
