import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addInCart } from '../redux/slice/cartSlice';
import { useParams } from 'react-router-dom'

export default function Singleproduct() {
    var ans = useSelector(state=> state.filter.categoryValue);
    const [singleproduct, setSingleproduct] = useState([])
    const {proid} = useParams()
    const dispatch = useDispatch();
    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${proid}`)
        .then(response => response.json())
        .then(data =>{
          setSingleproduct(data)
        })

    }, [proid, ans])

    const handleAddToCart = (item) => {
      dispatch(addInCart(item));
    };

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-3">
        <img src={singleproduct.image} className="img-fluid" alt="img" />
      </div>
      <div className="col-9 singlePro boxPro">
        <h2>{singleproduct.title}</h2>
        <h4>Rs. {singleproduct.price}</h4>
        <p>{singleproduct.description}</p>
        <p><strong>Category:</strong> {singleproduct.category}</p>
        <button className='btn mt-3' onClick={() => handleAddToCart(singleproduct)}>Add to Cart</button>
      </div>
    </div>
  </div>
          
      )
      }
