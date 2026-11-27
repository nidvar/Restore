import { Link } from 'react-router';

import type {productItemType} from './Product.type';
import Button from '../Button/Button';
import { addItemToBasket } from '../../Pages/BasketPage/BasketApi';

import './ProductCard.css';

function App({productItem}: {productItem:productItemType}) {

  const addItem = async (id: string | number, quantity: number)=>{
    console.log('adding one item')
    addItemToBasket(id, quantity)
  }

  return (
    <div key={productItem.id} className="product-card">
      <img src={productItem.pictureUrl} />
      <div className='product-description semi-bold '>
        <p className='uppercase font-sm'>{productItem.name}</p>
        <p className='purple'>${productItem.price/100}.00</p>
        <div className='add-cart-view'>
          <Button buttonText="ADD TO CART" fn={function(){addItem(productItem.id, 1)}} ></Button>
          <Link to={"/catalog/" + productItem.id} className='button'>VIEW</Link>
        </div>
      </div>
    </div>
  )
}

export default App
