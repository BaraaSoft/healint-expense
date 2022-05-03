import React from 'react';
import { PageHeader, Button } from 'antd';


const Header = ({onAddExpense})=>{
    return (
        <PageHeader
            ghost={false}
            title="My Expense"
            subTitle="To track your expenses with ease"
            extra={[
                <Button key="1" type="primary" onClick={()=>onAddExpense?.call()}>Add Expense</Button>,
            ]}>
        </PageHeader>
    )
}

export default Header;
