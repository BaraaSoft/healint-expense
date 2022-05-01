import React from 'react';
import { PageHeader, Button } from 'antd';


const Header = ()=>{
    return (
        <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Title"
            subTitle="This is a subtitle"
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">Primary</Button>,
            ]}></PageHeader>
    )
}

export default Header;