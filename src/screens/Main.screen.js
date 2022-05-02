import React from 'react';
import {Layout} from 'antd';
import Header from '../components/Header';
import Chart from '../components/Chart'
const {Content, Footer,Sider } = Layout;

const MainScreen = ()=>{

    return(
        <Layout  style={{height:'100vh',display:'flex',flexDirection:'column'}}>
            <Header/>  
            <Layout style={{flex:1}}>
                <Content style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Chart/>
                </Content>
            </Layout>
            <Footer style={{height:'60px'}}>footer</Footer>
        </Layout>
    )
}


export {MainScreen}