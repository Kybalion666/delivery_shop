import React, { useCallback, useContext, useEffect, useState } from 'react';
import './dataClient.css';
import { Button, Form } from 'react-bootstrap';
import { createData } from '../../http/productAPI';
import { useTelegramm } from '../hooks/useTelegramm';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';


const DataClient = observer(() => {
  const {basket} = useContext(Context)
  // useState
  const [selectedPayment, setSelectedPayment] = useState('');
  const [clientName,setClientName] =useState('')
  const [address,setAddress] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [comments,setComments] = useState('')
  const selectedProductQuantity = basket.selectedProductQuantity
  const selectedProductNames = basket.selectedProductNames; //геттер из MobX (товары в корзине)
  const getBasketTotal = basket.getBasketTotal // геттер из MobX (общая сумма заказа)
  
  //telegrammWeb
  const tg = window.Telegram.WebApp

  //CallBack для передачи данных в telegrammBot
  const onSendData = useCallback(() => {
    const data = { 
      clientName,
      address,
      phoneNumber,
      comments,
      selectedPayment,
      selectedProductNames,
      selectedProductQuantity,
      getBasketTotal
      
      
    }

    tg.sendData(JSON.stringify(data));
},[clientName,address,phoneNumber,comments,selectedPayment,selectedProductQuantity,selectedProductNames,getBasketTotal])

// TelegrammWebAppMainButton
  useEffect(()=>{
    tg.onEvent('mainButtonClicked',onSendData) 
    return () => {
   tg.offEvent('mainButtonClicked',onSendData)
    }
  },[onSendData])

  useEffect(()=>{
    tg.ready()
    tg.MainButton.show()
    tg.MainButton.text = 'Оформить заявку'
  },[])



  useEffect(()=>{
    if(!clientName || !address || !phoneNumber){
      tg.MainButton.hide();
    } else {
      tg.MainButton.show()
    }
  },[clientName,address,phoneNumber])
  

// AddNewData предназначена для сохранения данных клиента в базу данных (закоментил данную логику так как она не нужна, сделал для наглядности )
  //FormDatafromAxios
  // const   AddNewData = () => {
  //    const   formData = new FormData()
  //    formData.append('clientName',clientName)
  //    formData.append('address',address)
  //    formData.append('phoneNumber',phoneNumber)
  //    formData.append('comments',comments)
  //    createData(formData).then(e => {
  //     console.log('Данные успешно добавлены',e)
  //    })
  // }


  // Здесь вызывайтся функция для обработки выбранного способа оплаты (onSelectPayment)
  const handleSelect = (payment) => {
    setSelectedPayment(payment.target.value);
  
  };

  return (
    <div className='datacontainer'>
      <div className='datamakingcontainer'>
        <div className='lables'>
          <h2>Оформление заказа:</h2>
          <h5>Заполните ваши данные:</h5>
         <Form>
            <Form.Group controlId='formName'>
              <Form.Control 
              type='text' 
              placeholder='Введите ваше имя' 
              value={clientName || ''}
              onChange={e => setClientName(e.target.value)}
              />

            </Form.Group>
            <Form.Group controlId='formPhoneNumber'>
              <Form.Control 
              type='number' 
              placeholder='Номер телефона' 
              value={phoneNumber || ''}
              onChange={e => setPhoneNumber(e.target.value)}
              />

           </Form.Group>
              <Form.Group controlId='formAddress'>
              <Form.Control 
              type='text' 
              placeholder='Адрес доставки'
              value={address || ''}
              onChange={e => setAddress(e.target.value)}
               />

            </Form.Group>
              <Form.Group controlId='formComments'>
              <Form.Control 
              type='text' 
              placeholder='Оставить комментарии...'
              value={comments || ''}
              onChange={e => setComments(e.target.value)}

              />
            </Form.Group>
         </Form>
         <select value={selectedPayment} onChange={handleSelect} > 
         <option disabled hidden value=''  >
             Cпособ оплаты
          </option>
        <option value={'Наличная оплата'}>Наличными</option>
        <option value={'Пластиковой картой'}>Картой</option>
      </select>
        </div>

      {/* // paymentMetods */}
        
      </div>
      
      
     

    </div>
  );
});

export default DataClient;
