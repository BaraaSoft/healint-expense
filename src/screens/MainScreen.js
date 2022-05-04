import React,{useState} from 'react';
import {Layout,Tabs} from 'antd';
import Header from '../components/Header';
import Chart from '../components/Chart'
import NewExpenseScreen from './NewExpenseScreen';
import Table from '../components/Table';

import { MainLayout,MainContent,AppTab,MainFooter } from './MainScreen.style';

const {Content, Footer,Sider } = Layout;



const { TabPane } = Tabs;

const MainScreen = ()=>{
    const [showExpenseModal,setShowExpenseModal] = useState(false)

    const onAddNewExpense = ()=>{

    }

    return(
        <>
            <MainLayout>
                <Header onAddExpense={()=>setShowExpenseModal(true)}/>  
                <Layout style={{flex:1}}>
                    <MainContent>
                        <AppTab defaultActiveKey="1" size="large" centered>
                            <TabPane tab="Chart" key="1">
                                <Chart/>
                            </TabPane>
                            <TabPane tab="Table" key="2">
                                <Table/>
                            </TabPane>
                        </AppTab>
                    </MainContent>
                </Layout>
                <MainFooter>My Expense ©2022 Created by Baraa</MainFooter>
                <NewExpenseScreen show={showExpenseModal} onVisibilityChange={(state)=>setShowExpenseModal(state)} />
            </MainLayout>
           
        </>
    )
}


export {MainScreen}