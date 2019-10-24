import React from 'react'

import { Grid, Card } from "tabler-react";


import C3Chart from "react-c3js";

const data = {
    columns: [["data1", 65]],
    type: "gauge"
};

function QuorumGaugeCard(props) {
    return (

        <Card title={`AGP Quorum`}>
            <Card.Body>
                <C3Chart data={{
                    columns: [
                        ["Quorum", props.quorum],
                    ],
                    type: "gauge",
                    legend: {
                        hide: false
                        //or hide: 'data1'
                        //or hide: ['data1', 'data2']
                    },
                }} />
            </Card.Body>
        </Card>
    )
}

export default QuorumGaugeCard