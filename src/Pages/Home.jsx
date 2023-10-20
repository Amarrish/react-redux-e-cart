import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useFetch from '../Hooks/useFetch'
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const data = useFetch("https://dummyjson.com/products")
  const dispatch = useDispatch()
  console.log(data);
  return (
    <div>
      <Row className='mt-5 mb-5 ms-5 justify-content-center'>
        {
          data?.length>0? data?.map((product,index)=>(
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
        <Button onClick={()=>dispatch(addToCart(product))}  className='btn' variant="primary"><i className='fa-solid fa-cart-plus fa-sx '></i></Button>
        <Button onClick={()=>dispatch(addToWishlist(product))} className='btn' variant="primary"><i className='fa-solid fa-heart fa-xs '></i></Button>
        </div>
      </Card.Body>
    </Card>
    </Col>
          ))
          :<p className=''>Nothing to display</p>
        }
    </Row>
    </div>
  )
}

export default Home
