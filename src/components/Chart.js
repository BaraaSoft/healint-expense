import React from 'react';
import {VictoryLine,VictoryChart,VictoryTheme,VictoryLegend,VictoryAxis} from 'victory';
import { connect } from 'react-redux';

const xAxe = [
    "Jan","Feb","Mar",
    "Apr","May","Jun",
    "Jul","Aug","Sept",
    "Oct","Nov","Dec"
]


const formateChartData = (expenseItems,cat)=>{
    return expenseItems.filter((item)=> item.category == cat.title)
            .map((item)=>({x:item.month,y:item.amount}))
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
                    data={formateChartData(expenseItems,cat)}
                    width={440}
                />
            )
        })
    )
}

const Chart = (props)=>{
    const {expenses,expenseCategories} =  props;
    return (
        <div style={{height:490,width:800}} >
            <VictoryChart theme={VictoryTheme.material} height={440} width={800}  >
            <VictoryLegend x={160} y={422}
                title="Expenses"
                centerTitle
                orientation="horizontal"
                gutter={20}
                style={{ border: { stroke: "#e5e5e5"}, title: {fontSize: 12 },labels:{fontSize:8} }}
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