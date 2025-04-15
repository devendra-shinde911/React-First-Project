import React,{useEffect, useState} from 'react'

export default function Womencloth() {

const [Womencloth, setWomencloth] = useState([])

useEffect(() => {


  fetch(`https://fakestoreapi.com/products/category/women's clothing`)
  .then(response => response.json())
  .then(data =>{
    setWomencloth(data)
  })
}, [])

  return (
   
    <div className='container mb-5'>
      <div className='productName'>
       <h2 className='mt-5'>Womens</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias fuga quisquam dicta quas cupiditate fugit officiis beatae sit ad. Neque totam nihil minima est officiis laborum commodi recusandae hic.</p>
      </div>
   <div className='row mt-5'>
        {
            Womencloth && Womencloth.map(val=>
                <div className='col-3 boxPro'>
                    <img src={val.image} className='img-fluid' alt="womens" style={{ height: '300px' }}/>
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
