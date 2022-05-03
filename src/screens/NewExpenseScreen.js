import React,{useState,useEffect} from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import {addExpense} from '../actions/index'


const NewExpenseScreen = ({show})=>{
    const [visible,setVisible] = useState(show);
    useEffect(()=>{
        setVisible(show)
    },[show])
    const onAddExpense = ()=>{

    }
    return(
        <>
            <Modal
                title="New Expense Entry"
                style={{ top: 20 }}
                okText="ADD"
                visible={visible}
                onOk={() => onAddExpense() }
                onCancel={() => setVisible(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    )
}


const mapStateToProps = ({expenses}) => {
    return { expenses }
}

export default connect(mapStateToProps,{addExpense})(NewExpenseScreen);