import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Components/AppRouter'

export const App = () => {

  return (
    <BrowserRouter>
   
    <AppRouter/>
    </BrowserRouter>
  )
}
export default App