// Админ панеь для добавления новых товаров в бд 

import React,{useContext, useState} from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap'
import { createProduct } from '../../http/productAPI';
import { Context } from '../..';

 const AdminPanelComponents = ({show,onHide}) => {
  const {product} = useContext(Context);

        const [name,setName] = useState('')
        const [price,setPrice] = useState('')
        const [file,setFile] =useState(null)


  const AddNewProduct = () => {
        const formData = new FormData()
        formData.append('name',name)
        formData.append('price',`${price}`)
        formData.append('img',file)
        createProduct(formData).then(e => onHide())
  }
  return (
    <Modal class="modal-dialog modal-dialog-centered"
    show={show} 
    onHide={onHide}
    backdrop="static" 
    keyboard={false}
    >
        <Modal.Header closeButton>
                    <Modal.Title>Добавить товар</Modal.Title>
        </Modal.Header>

            <Modal.Body>
                    <form>
                        <FormControl
                         placeholder="Введите название товара" 
                         value={name || ''}
                         onChange={e => setName(e.target.value)}
                         
                         
                         />

                    </form>
                    <form>
                        <FormControl
                         placeholder="Введите цену" 
                         type='number'
                         value={price}
                         onChange={e => setPrice(Number(e.target.value))}
                         
                         />

                    </form>
                    <form>
                        <FormControl
                         placeholder="Для картинки" 
                         type='file'
                         onChange={(e) => setFile(e.target.files[0])}
                         
                         
                         />

                    </form>
            </Modal.Body>

                    <Modal.Footer>
                            <Button
                             variant="secondary" onClick={onHide}
                            >
                                    Закрыть
                            </Button>
                                <Button 
                                variant="primary" onClick={AddNewProduct}
                                >
                                        Добавить
                                </Button>
                    </Modal.Footer>
</Modal>
  )
}
export default AdminPanelComponents
