import React from 'react'

const Footers = () => {
  return (
    <>
      <div className='d-flex justify-content-between m-2 bg-secondary p-2'>

        <div>
        <h4>Ecart</h4>
        <p>Designed and built with all the love in the world </p>
        <p>Code Licensed MIT, doc CC By 3.0</p>
        <p>Currently v1.3.2</p>
        </div>

        <div>
        <h4>Links</h4>
        <p>Home</p>
        <p>Cart</p>
        <p>Wishlist</p>
        </div>

        <div>
        <h4>Contact Us</h4>
        <input type="text" placeholder='Enter your Email' />
        </div>
       
      </div>
      <hr />
        <p style={{textAlign:'center'}}>Copyright @ 2023</p>
    </>
  )
}

export default Footers