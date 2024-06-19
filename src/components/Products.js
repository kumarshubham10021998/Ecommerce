import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch , useSelector } from 'react-redux';
import {add}  from '../store/cardSlic';
import {getProducts} from '../store/productSlice'

const Products = () => {
    const dispatch = useDispatch();
    // Get the products from Redux store.
    const {data: products} = useSelector(state => state.products);
  // const [product, setProduct] = useState([]);

  useEffect(() => {
    
    dispatch(getProducts());
 
  }, [dispatch]);


  const addToCart=(product)=>{
//dispatch add action
dispatch(add(product))
  }

  const cards = products.map((product) => (
    <div className='col-md-3' key={product.id}>
      <Card className='m-2' style={{ width: '18rem' }}>
        <div className='text-center'>
        
        <Card.Img style={{width:'100px', height:'130px'}} variant="top" src={product.image} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR : {product.price}</Card.Text>
          <Button  variant="primary" onClick={()=>addToCart(product)} >Add To Card</Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Product Dashbord</h1>
      <div className='row'>
        {cards}
      </div>
    </div>
  );
};

export default Products;
