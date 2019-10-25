import React from 'react'

import { Card, colors } from "tabler-react";

import C3Chart from "react-c3js";


const pieData = [
    ["data1", 1510.761544],
    ["data2", 2987.342012],
    ["data3", 5602.726497],
    ["data4", 218.4081505],
    ["data5", 202.3750482],
    ["data6", 47548.26097],
    ["data7", 47548.26097],
    ["data8", 24.1633327],
    ["data9", 4804.08711],
    ["data10", 1800],
    ["data11", 2501.194388],
    ["data12", 1.010973935],
    ["data13", 243.3878319],
    ["data14", 0.05363874],
    ["data15", 698.7],
    ["data16", 6169.916293],
    ["data17", 46453.40167],
    ["data18", 100],
    ["data19", 4000],
    ["data20", 24840],
    ["data21", 13317.96704],
    ["data22", 89575.16863],
    ["data23", 3314.021289],
    ["data24", 2097.994],
    ["data25", 102269.2319],
    ["data26", 20390.99009],
    ["data27", 594143],
    ["data28", 100],
    ["data29", 13.7],
    ["data30", 114.0155314],
    ["data31", 100000],
    ["data32", 7474.25633],
    ["data33", 396770.7994],
    ["data34", 207593.4902],
    ["data35", 50],
    ["data36", 90.00002093],
    ["data37", 10],
    ["data38", 20000],
    ["data39", 501],
    ["data40", 5000],
    ["data41", 5000]
]

const names = {
    data1: "0x2b5afa7a939e475a327c763f725d88e8a92ce342",
    data2: "0x2b5afa7a939e475a327c763f725d88e8a92ce343",
    data3: "0x2b5afa7a939e475a327c763f725d88e8a92ce344",
    data4: "0x2b5afa7a939e475a327c763f725d88e8a92ce345",
    data5: "0x2b5afa7a939e475a327c763f725d88e8a92ce346",
    data6: "0x2b5afa7a939e475a327c763f725d88e8a92ce347",
    data7: "0x2b5afa7a939e475a327c763f725d88e8a92ce348",
    data8: "0x2b5afa7a939e475a327c763f725d88e8a92ce349",
    data9: "0x2b5afa7a939e475a327c763f725d88e8a92ce350",
    data10: "0x2b5afa7a939e475a327c763f725d88e8a92ce351",
    data11: "0x2b5afa7a939e475a327c763f725d88e8a92ce352",
    data12: "0x2b5afa7a939e475a327c763f725d88e8a92ce353",
    data13: "0x2b5afa7a939e475a327c763f725d88e8a92ce354",
    data14: "0x2b5afa7a939e475a327c763f725d88e8a92ce355",
    data15: "0x2b5afa7a939e475a327c763f725d88e8a92ce356",
    data16: "0x2b5afa7a939e475a327c763f725d88e8a92ce357",
    data17: "0x2b5afa7a939e475a327c763f725d88e8a92ce358",
    data18: "0x2b5afa7a939e475a327c763f725d88e8a92ce359",
    data19: "0x2b5afa7a939e475a327c763f725d88e8a92ce360",
    data20: "0x2b5afa7a939e475a327c763f725d88e8a92ce361",
    data21: "0x2b5afa7a939e475a327c763f725d88e8a92ce362",
    data22: "0x2b5afa7a939e475a327c763f725d88e8a92ce363",
    data23: "0x2b5afa7a939e475a327c763f725d88e8a92ce364",
    data24: "0x2b5afa7a939e475a327c763f725d88e8a92ce365",
    data25: "0x2b5afa7a939e475a327c763f725d88e8a92ce366",
    data26: "0x2b5afa7a939e475a327c763f725d88e8a92ce367",
    data27: "0x2b5afa7a939e475a327c763f725d88e8a92ce368",
    data28: "0x2b5afa7a939e475a327c763f725d88e8a92ce369",
    data29: "0x2b5afa7a939e475a327c763f725d88e8a92ce370",
    data30: "0x2b5afa7a939e475a327c763f725d88e8a92ce371",
    data31: "0x2b5afa7a939e475a327c763f725d88e8a92ce372",
    data32: "0x2b5afa7a939e475a327c763f725d88e8a92ce373",
    data33: "0x2b5afa7a939e475a327c763f725d88e8a92ce374",
    data34: "0x2b5afa7a939e475a327c763f725d88e8a92ce375",
    data35: "0x2b5afa7a939e475a327c763f725d88e8a92ce376",
    data36: "0x2b5afa7a939e475a327c763f725d88e8a92ce377",
    data37: "0x2b5afa7a939e475a327c763f725d88e8a92ce378",
    data38: "0x2b5afa7a939e475a327c763f725d88e8a92ce379",
    data39: "0x2b5afa7a939e475a327c763f725d88e8a92ce380",
    data40: "0x2b5afa7a939e475a327c763f725d88e8a92ce381",
    data41: "0x2b5afa7a939e475a327c763f725d88e8a92ce382"
}

const chart = {
    title: "Lorem ipsum",
    data: {
        columns: pieData,
        type: "pie", // default type of chart
        names: names,
    },
    axis: {},
}

function VoterWeightPieChart() {
    return (
        <Card title={chart.title}>
            <Card.Body>
                <C3Chart
                    data={chart.data}
                    axis={chart.axis}
                    legend={{
                        show: false, //hide legend
                    }}
                    padding={{
                        bottom: 0,
                        top: 0,
                    }}
                />
            </Card.Body>
        </Card>
    )
}

export default VoterWeightPieChart
