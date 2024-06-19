import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove, increaseQuantity, decreaseQuantity } from '../store/cardSlic';

const Cards = () => {
  const products = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const increaseProductQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseProductQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const cards = products.map((product) => (
    <div className='col-md-4' key={product.id}>
      <Card className='m-2'>
        <div className='text-center'>
          <Card.Img style={{ width: '100px', height: '130px' }} variant="top" src={product.image} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
          <Card.Text>Quantity: {product.quantity}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={() => decreaseProductQuantity(product.id)}>-</Button>
            <Button variant="secondary" onClick={() => increaseProductQuantity(product.id)}>+</Button>
            <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div className='container'>
      <div className='row'>
        {cards}
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <Card className='m-2'>
            <Card.Body>
              <Card.Title>Total Amount</Card.Title>
              <Card.Text>INR: {totalAmount}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
