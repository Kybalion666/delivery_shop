import axios from "axios"
const $host = axios.create({
    baseURL: String(process.env.REACT_APP_API_URL)
    
})
 console.log(process.env.REACT_APP_API_URL)

export{
    $host,
    
}
