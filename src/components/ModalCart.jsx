import React from 'react'
import { Modal } from 'reactstrap'

import { useSelector } from 'react-redux'

import Product_ModalCart from './Product_ModalCart'

const ModalCart = () => {

    const state = useSelector((state) => state.modal)
    
    return (
        <div>
            <Modal isOpen={state.modal} className="ModalCart">
            
                    
                <Product_ModalCart/>
                    
         
            </Modal>
        </div>
    )
}



export default ModalCart
