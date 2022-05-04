
import styled from "styled-components";
import {Layout,Tabs} from 'antd';
const {Content, Footer,Sider } = Layout;

const { TabPane } = Tabs;

export const MainLayout = styled(Layout)`
    height:100vh;
    display:flex;
    flex-direction: column;
`;

export const MainContent = styled(Content)`
    display:flex;
    justify-content:center;
    align-items:stretch;
    background:white;
    margin-top:1;
`;

export const AppTab = styled(Tabs)`
    background:white;
    min-width:600;
`;

export const MainFooter = styled(Footer)`
   height:8px;
   text-align:center;
   width:100%;
   margin-bottom:16px;
   color:#777
`;