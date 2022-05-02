import React from 'react';
import {Layout,Tabs} from 'antd';
import Header from '../components/Header';
import Chart from '../components/Chart'
const {Content, Footer,Sider } = Layout;

const { TabPane } = Tabs;

const MainScreen = ()=>{

    return(
        <Layout  style={{height:'100vh',display:'flex',flexDirection:'column'}}>
            <Header/>  
            <Layout style={{flex:1}}>
                <Content style={{display:'flex',justifyContent:'center',alignItems:'stretch',background:'white'}}>
                    <Tabs defaultActiveKey="1" size="large" centered style={{background:'white',minWidth:600}}>
                        <TabPane tab="Chart" key="1">
                            <Chart/>
                        </TabPane>
                        <TabPane tab="Table" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                    </Tabs>
                </Content>
            </Layout>
            <Footer style={{height:'40px'}}>footer</Footer>
        </Layout>
    )
}


export {MainScreen}