import './ProductCard.css';
import type {productItemType} from './Product.type';

function App({props}: {props:productItemType}) {
  return (
    <div key={props.id} className="product-card">
      <img src={props.pictureUrl} style={{maxHeight: "200px"}}/>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <p>{props.quantityInStock}</p>
    </div>
  )
}

export default App
