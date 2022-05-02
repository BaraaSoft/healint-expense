import React from 'react';
import { PageHeader, Button } from 'antd';


const Header = ()=>{
    return (
        <PageHeader
            ghost={false}
            title="My Expense"
            subTitle="To track your expenses with ease"
            extra={[
                <Button key="1" type="primary">Add Expense</Button>,
            ]}>
        </PageHeader>
    )
}

export default Header;
