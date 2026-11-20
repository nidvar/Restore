import './ProductCard.css';
import type {productItemType} from './Product.type';

function App({props}: {props:productItemType}) {
  return (
    <div key={props.id} className="product-card">
      <img src={props.pictureUrl} />
      <div className='product-description semi-bold '>
        <p className='uppercase font-sm'>{props.name}</p>
        <p className='purple'>${props.price/100}.00</p>
        <div className='add-cart-view'>
          <p>ADD TO CART</p>
          <p>VIEW</p>
        </div>
      </div>
    </div>
  )
}

export default App
