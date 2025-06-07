
import { useState } from 'react';
import Card from './Card'
import ProductDate from './ProductDate'
const ProductItem=(props)=>
{
    const[title,setTitle]=useState(props.title);

    function clickHandler(){
        setTitle("Maggie");
        console.log("Button clicked");
    }
    return (
        <Card>
             <ProductDate date={props.date}></ProductDate>
             <div>
                <h2>{title}</h2>
             </div>
             <button onClick={clickHandler}>Add to Cart</button>
        </Card>
       
    )
}
export default ProductItem;