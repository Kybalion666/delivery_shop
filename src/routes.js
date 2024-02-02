import {Shop} from "./Pages/Shop.js";
import { Basket } from "./Pages/Basket.js";
import { Customer } from "./Pages/Customer.js";
import { SHOP_ROUTE,BASKET_ROUTE,CUSTOMER_ROUTE } from "./utils/const.js";

export const publicRoutes = [
    {
        path:SHOP_ROUTE,
        Coomponent:Shop
    },
    {
        path:  BASKET_ROUTE,
        Component:Basket
    },
    {
        path:CUSTOMER_ROUTE,
        Component:Customer
    },

]