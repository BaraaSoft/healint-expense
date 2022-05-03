import React,{useState,useEffect} from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import {addExpense} from '../actions/index';
import { Input, Tooltip ,DatePicker,Select,InputNumber} from 'antd';
import { InfoCircleOutlined, ShoppingCartOutlined,DollarOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Option } = Select;

const NewExpenseScreen = (props)=>{
    const {show,expenseCategories,addExpense} = props
    const [visible,setVisible] = useState(show);
    const [expenseItem,setExpenseItem] = useState({});
    const [disableAddButton,setDisableAddButton] = useState(true)

    useEffect(()=>{
        const {category,date,amount,expenseType} = expenseItem;
        if(category && date && amount && expenseType) setDisableAddButton(false)
        else setDisableAddButton(true)
    },[expenseItem])
    useEffect(()=>{
        setVisible(show)
    },[show])
    
    const onAddExpense = ()=>{
        addExpense(expenseItem)
        setExpenseItem({})
    }
    const onExpenseTypeChange = (e)=>{
        setExpenseItem({
            ...expenseItem,
            expenseType:e.target.value
        })

    }
    const onExpenseCategoryChange = (category)=>{
        setExpenseItem({
            ...expenseItem,
            category
        })
    } 
    const onSelectExpenseDate = (date)=>{
        setExpenseItem({
            ...expenseItem,
            month:date.month()+1,
            year:date.year(),
            date:date.format()
        })
    }

    const onExpenseAmountChange = (amount)=>{
        if(isNaN(+amount)) amount = 0
        setExpenseItem({
            ...expenseItem,
            amount
        })
    }

    return(
        <>
            <Modal
                title="New Expense Entry"
                style={{ top: 20 }}
                okText="ADD"
                okButtonProps={{disabled:disableAddButton}}
                visible={visible}
                onOk={() => onAddExpense() }
                onCancel={() => {setExpenseItem({});setVisible(false);}}
            >
                <Input
                    onChange={onExpenseTypeChange}
                    placeholder="enter expense type"
                    value={expenseItem?.expenseType}
                    prefix={<ShoppingCartOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="expense type name">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }/>
                <div>
                    <Select placeholder="choose expense category" 
                        value={expenseItem.category}
                        style={{width:'60%',marginTop:24}} onChange={onExpenseCategoryChange}>
                        {expenseCategories.map((cat)=>{
                            return(
                                <Option key={cat.id} value={cat.title}>{cat.title}</Option>
                            )
                        })}
                    </Select>
                    <DatePicker value={expenseItem.date?moment(expenseItem.date):null} picker="month" bordered={true} size="middle" style={{width:'40%'}} onSelect={onSelectExpenseDate} />
                </div>
                <div style={{width:'100%',marginTop:24}} >
                    <InputNumber placeholder="enter expense amount" value={expenseItem?.amount} style={{width:'100%'}} addonAfter={<DollarOutlined />} onChange={onExpenseAmountChange}  />
                </div>
            </Modal>
        </>
    )
}


const mapStateToProps = ({expenses,expenseCategories}) => {
    return { expenses,expenseCategories }
}

export default connect(mapStateToProps,{addExpense})(NewExpenseScreen);