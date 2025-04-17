import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addInCart } from '../redux/slice/cartSlice';
import { Link } from 'react-router-dom';
export default function Jewellery() {
var ans = useSelector(state=> state.filter.categoryValue);
const [jewellery, setJewellery] = useState([])
const dispatch = useDispatch();
useEffect(() => {

  var apiPath = 'https://fakestoreapi.com/products/category/jewelery'
  fetch(apiPath)
  .then(response => response.json())
  .then(data =>{
     setJewellery(data)
  })
}, [ans])

const handleAddToCart = (item) => {
  dispatch(addInCart(item));
};

  return (
   
    <div className='container mb-5'>
      <div className='productName'>
       <h2 className='mt-5'>Jewelery</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias fuga quisquam dicta quas cupiditate fugit officiis beatae sit ad. Neque totam nihil minima est officiis laborum commodi recusandae hic.</p>
      </div>
   <div className='row mt-5'>
        {
            jewellery && jewellery.map(val=>
                <div className='col-3 boxPro'>
                     <Link to={`/singleproduct/${val.id}`}>
                    <img src={val.image} className="img-fluid" alt={val.title} />
                    </Link>
                    <p className='title'>{val.title}</p>
                    <p className='PriceName'>Rs.{val.price}</p>                                      
                    <button className='btn' onClick={()=>handleAddToCart(val)}>Add to Cart</button>
                </div>
            )
        }
    </div>
    </div>


  )
}
