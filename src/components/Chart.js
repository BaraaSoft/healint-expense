import React from 'react';
import {VictoryLine,VictoryChart,VictoryTheme,VictoryLegend} from 'victory'

const Chart = ()=>{
    return (
        <div style={{height:480,width:410}} >
            <VictoryChart theme={VictoryTheme.material}  >
            <VictoryLegend x={125} y={332}
                title="Expenses"
                centerTitle
                orientation="horizontal"
                gutter={20}
                style={{ border: { stroke: "#e5e5e5"}, title: {fontSize: 12 },labels:{fontSize:8} }}
                data={[
                    { name: "One", symbol: { fill: "tomato" } },
                    { name: "Two", symbol: { fill: "orange" } },
                    { name: "Three", symbol: { fill: "gold" } }
                ]}/>
                <VictoryLine 
                    style={{
                    data: { stroke: "#c43a31",strokeLinecap: "round",strokeWidth: 3},
                    parent: { border: "2px solid #ccc"}
                    }}

                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]}
                />
                <VictoryLine
                    style={{
                    data: { stroke: "orange",strokeLinecap: "round",strokeWidth: 3, },
                    parent: { border: "2px solid #ccc"}
                    }}
                    categories={{ x: ["dogs", "cats", "mice","bara","Mirghani"] }}
                    data={[
                        { x: 1, y: 4 },
                        { x: 2, y: 19 },
                        { x: 3, y: 3 },
                        { x: 4, y: 3 },
                        { x: 5, y: 7 }
                    ]}
                />
            </VictoryChart>
        </div>
    )
}

export default Chart



//npm install victory --save --legacy-peer-deps