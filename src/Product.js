import React from 'react'

const img = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f13085.jpg";

const Product = () => {
  return (
    <div className='card'>
        <img src={img} />
        <p>200$ Bidoo Shop</p>
        <hr/>
        <p className='green'>0,60$</p>
        <p>kicciei</p>
        <p className='red'>00:33</p>
        <div className='bet'>
            <p>PUNTA</p>
        </div>
        <button>200$</button>
    </div>
  )
}

export default Product