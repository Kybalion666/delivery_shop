import { $host } from ".";
export const createProduct = async (product) => {
    const {data} = await $host.post('api/product',product) 
    return data
} 
export const fetchProduct= async () => {
    try {
        const {data} = await $host.get('api/product')
        return data 
    }                   catch (error){ 
                        console.error('Error during fetcProduct:', error);
                        throw error
    }}

export const createData = async (customer) => {
    try{
        const {data} = await $host.post('api/customer',customer)
        return data
    }catch(error)
    { 
        console.error('Error during createData:', error);
        throw error
    }
}

export const fetchData= async () => {
    try {
        const {data} = await $host.get('api/customer')
        return data 
    }                   catch (error){ 
                        console.error('Error during fetchData:', error);
                        throw error
    }}