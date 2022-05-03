import React,{useState,useEffect} from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import {addExpense} from '../actions/index';
import { Input, Tooltip ,DatePicker,Select} from 'antd';
import { InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Option } = Select;

const NewExpenseScreen = (props)=>{
    const {show,expenseCategories} = props
    const [visible,setVisible] = useState(show);
    useEffect(()=>{
        setVisible(show)
    },[show])
    const onAddExpense = ()=>{}
    const onExpenseCategoryChange = ()=>{} 
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
                <Input
                    placeholder="Enter expense name"
                    prefix={<ShoppingCartOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="expense name">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }/>
                <div>
                    <Select placeholder="choose expense category" style={{width:'60%',marginTop:24}} onChange={onExpenseCategoryChange}>
                        {expenseCategories.map((cat)=>{
                            return(
                                <Option key={cat.id} value={cat.title}>{cat.title}</Option>
                            )
                        })}
                    </Select>
                    <DatePicker picker="month" bordered={true} size="middle" style={{width:'40%'}} />
                </div>
            </Modal>
        </>
    )
}


const mapStateToProps = ({expenses,expenseCategories}) => {
    return { expenses,expenseCategories }
}

export default connect(mapStateToProps,{addExpense})(NewExpenseScreen);