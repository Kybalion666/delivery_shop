import React, { useContext ,useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Context } from '../..';
import './Card.css';
import { Link, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, CUSTOMER_ROUTE, SHOP_ROUTE } from '../../utils/const';
import Button  from '../Button/Button.jsx';
export const BasketCard = observer(() => {
  const { basket } = useContext(Context);
  
  const navigate = useNavigate()
  const AdminPanelRoute = ( ) => {
    navigate(ADMIN_ROUTE)
  }

  const handleRedirectToProducts =() => {
    navigate(SHOP_ROUTE,{ state: { keepBasketState: true } })
  }
//buttoncomponents
  const handleAdd = (product) => {
    basket.addeQuantityById(product.id);
    
  };
  const handleRemove = (product) => {
    basket.decreaseQuantityById(product.id); 
  };

  return (
    <div className='globalcardcontainer'>
    <div className='cardcontainer'>
      <h3>Ваш заказ:</h3>
      <Link to={SHOP_ROUTE} onClick={handleRedirectToProducts}>Назад</Link>
      <div className='product'>
        {basket.selectedProducts.map((product) => (
          <Col key={product.id} md={3}>
                <div className='productitem'>
                  <div className='cardtitle'>{product.name}</div>
                  <div className='cardprice'>{product.price}</div>
                    
                    
                  
                    
                  <div className='imageblock'>
                        <img className='cardimage' 
                            src={process.env.REACT_APP_API_URL+ product.img} 
                            alt={product.name} /> 
                        <div className='vertikalline'></div>
                  </div>
                  
                   
                    <div className='cardbutton'>
                    
                              <Button
                                type={"handleAdd"}
                                title={<i class="bi bi-plus-circle"></i>}
                                variant="primary"
                                onClick={() => handleAdd(product)}
                            
                              />
                            
                          
                                  <Button
                                    type={"handleRemove"}
                                    variant="danger"
                                    title={<i class="bi bi-dash-circle"></i>}
                                    onClick={() => handleRemove(product)}
                                    style={{
                                      
                          
                                      
                                      
                                    
                                
                                    }}
                                  />
                            
                        
                        <div className='productquantity'>
                            <form>{product.quantity}</form>

                        </div>
                    </div>
                
                </div>
          </Col>
        ))}
      
         

        <div className='totalbasketprice'>Итог: 
              <f>{basket.getBasketTotal}.som</f>
      </div>
      </div>
      
    
    
    <button onClick={AdminPanelRoute}>AdminPanel</button>
    
    

    </div>
    
    </div>
    
  );
});

