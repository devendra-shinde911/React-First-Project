import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addInCart } from '../redux/slice/cartSlice';
import { Link } from 'react-router-dom';

export default function Rightproduct() {

    var ans = useSelector(state=> state.filter.categoryValue);
    const [product,setProduct] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {

       var apiPath = (ans=='')?'https://fakestoreapi.com/products/':`https://fakestoreapi.com/products/category/${ans}`;

        fetch(apiPath)
        .then(response => response.json())
        .then(data => {
            setProduct(data)
        })
       
    }, [ans]);

    const handleAddToCart = (item) => {
        dispatch(addInCart(item));
      };

  return (
    <div className='rightBg'>
     <h2>All Product</h2>

    <div className='row mt-4'>
        {
            product && product.map(val=>
                <div className='col-3 boxPro'>
                    <div className='productItem'>
                    <Link to={`/singleproduct/${val.id}`}>
                    <img src={val.image} className="img-fluid" alt={val.title} />
                    </Link>
                    <p className='title'>{val.title}</p>
                    <p className='PriceName'>Rs.{val.price}</p>                                      
                    <button className='btn' onClick={() => handleAddToCart(val)}>Add to Cart</button>
                    </div>
                </div>
            )
        }
    </div>

    </div>
  )
}
