import React, { useState,useContext, useEffect } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import './ProductItem.css'
import Button from "../Button/Button";
import { Context } from '../../index.js'
import { useTelegramm } from '../hooks/useTelegramm.js';
import { useNavigate } from 'react-router-dom';
import { BASKET_ROUTE } from '../../utils/const.js';

const ProductItem = ({ product }) => {
 const { basket } = useContext(Context)
 const [cardItems,setCartItems] = useState([])
 const [count, setCount] = useState(0);
 const [showButtons, setShowButtons] = useState(false); // Новое состояние для отображения кнопок
 
 //TelegrammWebAppButton
  const navigate = useNavigate();
  const { tg } =useTelegramm()

   useEffect(()=>{
    tg.ready()
  },[])
   
  const navigateMainButton = () => {
    navigate(BASKET_ROUTE)
  }


// MobxCompponents
 const onAdd = (product) => {
  basket.addeQuantityById(product.id);
};
// MobxCompponents
const onRemove = (product) => {
  basket.decreaseQuantityById(product.id);
};

  //AddButton
  const onIncrement = () => {
      setCount(count + 1);
      onAdd(product);
      setShowButtons(true)
    
  };
    //mainAddButton + telegrammMainButton(go to basket page) + incremet count
    const onOneIncrement = () => {
          tg.MainButton.show()
          tg.MainButton.text = 'Перейти в корзину'
          tg.onEvent('mainButtonClicked', navigateMainButton)
          setCount(count + 1);
          onAdd(product);
          setShowButtons(true)
          basket.addToBasket(product);
    };
      //RemoveButton  + decrement count
      const onDecrement = () => {
            setCount(count - 1);
            onRemove(product);
            if (count === 1) {
              setShowButtons(false); // Скрываем кнопки при уменьшении счетчика до 1
            }
      
        
      };




  return (
  <div>
          
      <Card >

        <span
            className={`${count !== 0  ? "card__badge"  : "card__badge--hidden"}`}
            >
            {count}
       </span>
        
          <Image  width={100}
                  height={100} 
                  src={process.env.REACT_APP_API_URL + product.img} 
                  style={{margin:'auto', marginTop:'10px',border:'20px'}} />


             <div className='content'>
               <div className='title'>{product.name}</div>
                  <div className='price'>{product.price}.som</div>
             </div>


             {/* buttonChapter */}

                <div className="btn-container"
                    >
                      {!showButtons ? (
                      <Button 
                        title={<i class="bi bi-cart"></i>}
                        type={'mainButton'}
                        onClick={onOneIncrement}
                    />

                    ) : (
                      
                      <div>
                          <Button 
                              title={<i class="bi bi-plus-lg"></i>}
                              type={"add"}
                              onClick={onIncrement}
                          />
                              <Button 
                                  title={<i class="bi bi-dash-lg"></i>}
                                  type={"remove"}
                                  onClick={onDecrement}
                              />
                      </div>
                         )}
                    
                 </div>
       </Card>
   </div>

    )};

export default ProductItem;
