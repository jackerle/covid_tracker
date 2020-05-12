import React, { useState } from 'react';
import Modal from 'react-awesome-modal'

function Template_Modal(props){

    const {modal_content} = props
    const [visible,setVisible] = useState(true)
    const onModal = ()=>{
        setVisible(true)
    }
    const offModal = ()=>{
        setVisible(false)
    }

    return (
        <Modal 
            visible={visible}
            width = {'640'}
            height = {'480'}
            effect = {"fadeInUp"} 
            onClickAway = {()=>{
                offModal();
            }}>
                <div>
                    <div style={{'text-align':'right'}}className="modal-header">
                        <span style={{'text-align':'right','font-size':'25px','margin-right':'15px'}}id='close' onClick={()=>{offModal()}}>x</span>
                    </div>    
                    {modal_content()}
                </div>
        </Modal>
    )
}

export default Template_Modal;