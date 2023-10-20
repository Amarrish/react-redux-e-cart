import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Headers = () => {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
   
    <nav style={{zIndex:'1',top:'0'}} className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
      
        <div className="container px-4 px-lg-5">
            <Link to={'/'} className="navbar-brand" href="#!">E-Cart</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
                <form className="d-flex ms-auto">
                   <Link to={'/cart'}> <button className="btn btn-outline-dark" type="submit">
                        <i className="bi-cart-fill me-1"></i>
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
                    </button>
                    </Link>
                    <Link to={'/whishlist'}>
                    <button className="btn btn-outline-dark ms-4" type="submit">
                        <i className="bi-cart-fill me-1"></i>
                        Whishlist
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{wishlist.length}</span>
                    </button>
                    </Link>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default Headers