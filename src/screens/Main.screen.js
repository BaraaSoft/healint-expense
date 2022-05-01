import React from 'react';
import {Layout} from 'antd';
import Header from '../components/Header'
const {Content, Footer,Sider } = Layout;

const MainScreen = ()=>{

    return(
        <Layout style={{display:'flex',flexDirection:'column',height:'100hv'}} >
        
                  <Header style={{flex:1}}/>
            <Layout style={{flex:4,alignSelf:'stretch'}} >
                <Content>
                    main content
                </Content>
            </Layout>
            <Footer style={{height:'60px'}} >footer</Footer>
         
          
        </Layout>
    )
}


export {MainScreen}