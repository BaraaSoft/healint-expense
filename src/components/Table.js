import React from 'react';
import { connect } from 'react-redux';
import { Table} from 'antd';
import moment from 'moment';


const columns = [
       { title:'Expense Type',dataIndex:'expenseType',key:'expenseType'},
       { title: 'Expense category',dataIndex:'category',key:'category'},
       { 
           title:'Amount',
           dataIndex:'amount',
           key:'amount',
           sorter: (a, b) => a.amount - b.amount
        },   
       { 
        title:'Placement Date',
        dataIndex:'date',
        key:'Date',
        sorter: (a, b) =>{
                if(moment(a.date) >= moment(b.date)) return 1
                else return -1
                
            },
        }
]



const ExpenseTable = (props)=>{
    const {expenses,expenseCategories} = props
    return(
       <>
        <Table style={{minWidth:800}} dataSource={expenses} columns={columns} pagination={{pageSize:10}} />;
       </>
    );
}

const mapStateToProps = ({expenses,expenseCategories}) => {
    return { expenses,expenseCategories }
}

export default connect(mapStateToProps,{})(ExpenseTable);