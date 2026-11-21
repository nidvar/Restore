import './ProductCard.css';
import type {productItemType} from './Product.type';
import { Link } from 'react-router';

function App({productItem}: {productItem:productItemType}) {
  return (
    <div key={productItem.id} className="product-card">
      <img src={productItem.pictureUrl} />
      <div className='product-description semi-bold '>
        <p className='uppercase font-sm'>{productItem.name}</p>
        <p className='purple'>${productItem.price/100}.00</p>
        <div className='add-cart-view'>
          <p>ADD TO CART</p>
          <Link to={"/catalog/" + productItem.id} >VIEW</Link>
        </div>
      </div>
    </div>
  )
}

export default App
