import React , {createContext} from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import ProductMobx from './ProductMobx/ProductMobx'
import BasketStore from './ProductMobx/BasketStore';
 export const Context = createContext(null)
 const root = ReactDOM.createRoot(document.getElementById('root'));
 console.log(process.env.REACT_APP_API_URL)
 root.render(
   <Context.Provider value={{
            
            product: new ProductMobx(),
            basket: new BasketStore() 
     }}>
     <App />
   </Context.Provider>
 );
