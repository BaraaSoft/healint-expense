import React from 'react';
import {VictoryLine,VictoryChart,VictoryTheme,VictoryLegend,VictoryAxis} from 'victory';
import { connect } from 'react-redux';

const xAxe = [
    "Jan","Feb","Mar",
    "Apr","May","Jun",
    "Jul","Aug","Sept",
    "Oct","Nov","Dec"
]


const formateChartData = (expenseItems,cat,year)=>{

    const res =  expenseItems.filter((item)=> item.category == cat.title)
            .filter((item)=> item.year == year)
            .map((item)=>({x:item.month,y:item.amount}))
            .reduce((obj,curr)=>{
                if(obj[curr.x]){
                    obj[curr.x] = {...obj[curr.x], y:obj[curr.x].y+curr.y}
                }else{
                    obj[curr.x] = {x:curr.x,y:curr.y}
                }
                return obj
            },{})

    console.log({res:Object.values(res)})

    return Object.values(res);
}

const formateLegendData = (expenseCategories)=>{
    return expenseCategories.map((cat)=>({ name: cat.title, symbol: { fill: cat.color } }))
}

const renderLine = (expenseCategories,expenseItems)=>{
    return (
        expenseCategories.map((cat)=>{
            return (
                <VictoryLine 
                    key={cat.id}
                    style={{
                    data: { stroke: cat.color,strokeLinecap: "round",strokeWidth: 3},
                    parent: { border: "2px solid #ccc"}
                    }}
                   
                    categories={{ x: xAxe }}
                    data={formateChartData(expenseItems,cat,2022)}
                    width={440}
                />
            )
        })
    )
}

const Chart = (props)=>{
    const {expenses,expenseCategories} =  props;
    return (
        <div style={{height:520,width:800}} >
            <VictoryChart theme={VictoryTheme.material} height={440} width={800}  >
            <VictoryLegend x={100} y={424}
                title="Expenses"
                centerTitle
                orientation="horizontal"
                gutter={20}
                style={{ border: { stroke: "#e5e5e5"}, title: {fontSize: 14 },labels:{fontSize:11} }}
                data={formateLegendData(expenseCategories)}/>
                {renderLine(expenseCategories,expenses)}
            </VictoryChart>
        </div>
    )
}


const mapStateToProps = ({expenses,expenseCategories}) => {
    return { expenses,expenseCategories }
}

export default connect(mapStateToProps,{})(Chart)



//npm install victory --save --legacy-peer-deps