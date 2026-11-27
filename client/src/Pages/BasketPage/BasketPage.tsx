import { useEffect, useState } from "react";
import type { BasketType } from "../../Types";
import { emptyBasket, getBasket } from "./BasketApi";

import './BasketPage.css';
import Button from "../../Components/Button/Button";

function ProductDetailsPage() {
  const [basket, setBasket] = useState<BasketType>();

  useEffect(() => {
    console.log('basket page');
    const basketData = async () => {
      const data = await getBasket();
      console.log(data)
      setBasket(data);
    }
    basketData();
  }, []);

  return (
    <div className="page">
      <h1>Basket Page</h1>
      {
        basket ?
          <div className="product-details-container">
            <h1>Basket</h1>
            <Button buttonText="EMPTY BASKET" fn={function(){emptyBasket()}}></Button>
          </div> : null
      }
    </div>
  )
}

export default ProductDetailsPage
