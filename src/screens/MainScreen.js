import React,{useState} from 'react';
import {Layout,Tabs} from 'antd';
import Header from '../components/Header';
import Chart from '../components/Chart'
import NewExpenseScreen from './NewExpenseScreen';
import Table from '../components/Table';
const {Content, Footer,Sider } = Layout;

const { TabPane } = Tabs;

const MainScreen = ()=>{
    const [showExpenseModal,setShowExpenseModal] = useState(false)

    const onAddNewExpense = ()=>{

    }

    return(
        <>
            <Layout  style={{height:'100vh',display:'flex',flexDirection:'column'}}>
                <Header onAddExpense={()=>setShowExpenseModal(true)}/>  
                <Layout style={{flex:1}}>
                    <Content style={{display:'flex',justifyContent:'center',alignItems:'stretch',background:'white',marginTop:1}}>
                        <Tabs defaultActiveKey="1" size="large" centered style={{background:'white',minWidth:600}}>
                            <TabPane tab="Chart" key="1">
                                <Chart/>
                            </TabPane>
                            <TabPane tab="Table" key="2">
                                <Table/>
                            </TabPane>
                        </Tabs>
                    </Content>
                </Layout>
                <Footer style={{height:8,textAlign:'center',width:'100%',marginBottom:16,color:'#777'}}>My Expense ©2022 Created by Baraa</Footer>
                <NewExpenseScreen show={showExpenseModal} onVisibilityChange={(state)=>setShowExpenseModal(state)} />
            </Layout>
           
        </>
    )
}


export {MainScreen}