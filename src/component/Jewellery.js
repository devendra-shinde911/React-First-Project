import React,{useEffect, useState} from 'react'

export default function Jewellery() {

const [jewellery, setJewellery] = useState([])

useEffect(() => {


  fetch('https://fakestoreapi.com/products/category/jewelery')
  .then(response => response.json())
  .then(data =>{
     setJewellery(data)
  })
}, [])

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
                    <img src={val.image} className='img-fluid'/>
                    <p className='title'>{val.title}</p>
                    <p className='PriceName'>Rs.{val.price}</p>                                      
                    <button className='btn'>Add to Cart</button>
                </div>
            )
        }
    </div>
    </div>


  )
}
