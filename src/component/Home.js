import React from 'react'
import Leftcategory from '../component/Leftcategory'


import Rightproduct from './Rightproduct'


export default function Home() {
  return (
  
    <div className='container'>
    <div className='row mt-5'>

      <div className='col-3'>
       <Leftcategory/>
      </div>

      <div className='col-9'>
          <Rightproduct/>
      </div>
      </div>
    </div>
  
  )
}
