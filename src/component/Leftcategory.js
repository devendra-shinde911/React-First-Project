import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { filterCategory } from '../redux/slice/filterSlice';

export default function Leftcategory() {

    const [category, setCategory] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
     
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => {
            setCategory(data)
        })

    }, [])

    function sendData (val) {
        console.log("Clicked:", val);
        dispatch(filterCategory(val));
    }

  return (
    <div className='leftBg'>
    <h2>Category</h2>
    <ul className='catList'>
        {
            category && category.map(val=>

                <li onClick={()=>{ sendData(val) }}>{val}</li>
           
            )
        }
    </ul>
</div>

  )
}
