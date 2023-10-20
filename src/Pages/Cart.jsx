import React, { useEffect, useState } from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import {emptyCart, removeFromCart} from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navigate = useNavigate()
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()

  const [total,setTotal] = useState(0)
  const totalAmount = () =>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
        setTotal(0)
      }
    }
   
    useEffect(()=>{
      totalAmount()
    },[cartArray])

    const Checkout = ()=>{
      alert("Thank you for purchasing with us..")
      dispatch(emptyCart())
      navigate('/')
    }
  return (
    
    <div style={{marginTop:'100px'}}>
    
      {
        cartArray.length>0?
       <div className='d-flex'>
        <div className='w-75'>
        <table className='w-100 border'>
          <thead>
            <tr>
              <th>#</th>
              <th>product name</th>
              <th>image</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
        
        <tbody>
        {
          cartArray.map((product,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{product.title}</td>
              <td><img width={'150px'} height={'150px'} src={product.thumbnail} alt=""/></td>
              <td>{product.price}</td>
              <td><button className='btn' onClick={()=>dispatch(removeFromCart(product.id))}><i className='fa-solid fa-trash fa-xs text-danger '/></button></td>
            </tr>
           
          ))
        }
         </tbody>
        </table>
        </div>
        <div className='align-items-center justify-content-center w-25 d-flex'>
          <div className='text-center'>
          <h4>Cart Summary</h4>
          <h5>{cartArray.length}</h5>
          <h5>Total $:<span>{total}</span></h5>
          <div className='mt-3'><button onClick={Checkout} className='btn btn-success rounded'>Check out</button></div>
          </div>
        </div>
        </div>
       :<p>Nothing to display</p>
      }

  

    </div>
    
  )
}

export default Cart