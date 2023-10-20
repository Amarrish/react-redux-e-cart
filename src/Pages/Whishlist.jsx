import React from 'react'
import { Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromWishlist} from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';


const Whishlist = () => {

const wishlistArray = useSelector((state)=>state.wishlistReducer)

const dispatch =useDispatch()
const addTocartFromWishlist = (product)=>{
  dispatch(addToCart(product))
  dispatch(deleteFromWishlist(product.id))
}
  return (



    <div style={{marginTop:'100px'}}>
      <Row className='mb-5 ms-5'>
        {
          wishlistArray.length>0?
          wishlistArray.map((product,index)=>(
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
       <Card  style={{ width: '18rem', height:'27rem' }}>
      <Card.Img height={'200px'} variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
         <p>{product.description.slice(0,50)}</p>
         <p className='fw-bolder'>${product?.price}</p>
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button onClick={()=>dispatch(addTocartFromWishlist(product))}  className='btn' variant="primary"><i className='fa-solid fa-cart-plus fa-sx '></i></Button>
        <Button onClick={()=>dispatch(deleteFromWishlist(product.id))}  className='btn' variant="primary"><i className='fa-solid fa-trash fa-xs '></i></Button>
        </div>
      </Card.Body>
    </Card>
    </Col>
          )) :<p className='fw-bolder text-danger'> Your Wishlist is empty</p>
        }

      </Row>

    </div>
  )
}

export default Whishlist