import React, { useEffect } from 'react'
import { BasketCard } from '../Components/Card/Card'
import { useNavigate } from 'react-router-dom'
import { CUSTOMER_ROUTE,SHOP_ROUTE } from '../utils/const.js'
 export const Basket = () => {

    //navigation
    const navigate = useNavigate()
      const navigateBackButton = () => {
        navigate(SHOP_ROUTE)
        }
            const goToCustomerRoute = () => {
              navigate(CUSTOMER_ROUTE);
            };
     

 //telegrammWebAppEffects
 const tg = window.Telegram.WebApp
    useEffect(()=>{
            tg.ready()
            tg.BackButton.show()
            tg.onEvent('backButtonClicked', navigateBackButton)
            tg.MainButton.show()
            tg.MainButton.text = '1'
            tg.onEvent('mainButtonClicked', goToCustomerRoute)
                    },[goToCustomerRoute,navigateBackButton])

  return (

    <div><BasketCard/>
    
    </div>
  )
}





