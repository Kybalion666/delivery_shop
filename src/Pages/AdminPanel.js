import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import AdminPanelComponents from '../Components/AdminPanelComponents/AdminPanelComponents'

 export const AdminPanel = () => {
  const [panelVisible,setPanelVisible] =useState(false)
  return (
    <div>

<Container 
      className='d-flex flex-column'
      style={{height:'200px',
              width:'200px',
               }}>

                
        <Button variant={'outline-dark'} 
                className='mt-2'
                style={{color:'white'}}
                onClick={() => setPanelVisible(true)}
                >Добавить товар</Button>
      </Container>
      <AdminPanelComponents show={panelVisible} onHide={()=> setPanelVisible(false)}/>
    </div>
  )
}

