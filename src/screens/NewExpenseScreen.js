import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {addExpense} from '../actions/index';
import { Modal,Input, Tooltip ,DatePicker,Select,InputNumber} from 'antd';
import { InfoCircleOutlined, ShoppingCartOutlined,DollarOutlined } from '@ant-design/icons';
import moment from 'moment';
import { ExpenseCategorySelect,ItemRow } from './NewExpenseScreen.style';

const { Option } = Select;

const NewExpenseScreen = (props)=>{
    const {show,expenseCategories,addExpense,onVisibilityChange} = props
    const [expenseItem,setExpenseItem] = useState({});
    const [disableAddButton,setDisableAddButton] = useState(show)

    useEffect(()=>{
        const {category,date,amount,expenseType} = expenseItem;
        if(category && date && amount && expenseType) setDisableAddButton(false)
        else setDisableAddButton(true)
    },[expenseItem])
   
    
    const onAddExpense = ()=>{
        addExpense(expenseItem)
        setExpenseItem({})
    }

    const onCancel = ()=>{
        setExpenseItem({});
        onVisibilityChange(false);
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
                visible={show}
                onOk={onAddExpense}
                onCancel={onCancel}
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
                    <ExpenseCategorySelect placeholder="choose expense category" 
                        value={expenseItem.category}
                        onChange={onExpenseCategoryChange}>
                        {expenseCategories.map((cat)=>{
                            return(
                                <Option key={cat.id} value={cat.title}>{cat.title}</Option>
                            )
                        })}
                    </ExpenseCategorySelect>
                    <DatePicker value={expenseItem.date?moment(expenseItem.date):null} picker="month" bordered={true} size="middle" style={{width:'40%'}} onSelect={onSelectExpenseDate} />
                </div>
                <ItemRow>
                    <InputNumber placeholder="enter expense amount" value={expenseItem?.amount} style={{width:'100%'}} addonAfter={<DollarOutlined />} onChange={onExpenseAmountChange}  />
                </ItemRow>
            </Modal>
        </>
    )
}


const mapStateToProps = ({expenses,expenseCategories}) => {
    return { expenses,expenseCategories }
}

export default connect(mapStateToProps,{addExpense})(NewExpenseScreen);