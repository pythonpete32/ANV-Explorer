import React from 'react'

import { Button, Grid, Card, colors } from "tabler-react";


import C3Chart from "react-c3js";

const yay = () => {
    const val = []
    val.push("data1")
    for (let i = 0; i < 30; i++) {
        val.push(Math.random() * (3000000 - 1000000) + 1000000)
    }
    return val
}

const nay = () => {
    const val = []
    val.push("data2")
    for (let i = 0; i < 30; i++) {
        val.push(Math.random() * (2700000 - 750000) + 750000)
    }
    return val
}

const chart = {
    title: "AGP Results",
    data: {
        columns: [
            // each columns data
            yay(),
            nay(),
        ],
        type: "bar", // default type of chart
        colors: {
            data1: colors["blue"],
            data2: colors["pink"],
        },
        names: {
            // name of each series
            data1: "Yay",
            data2: "Nay",
        },
    },
    axis: {
        x: {
            type: "category",
            // name of each category
            categories: ["1", "2", "3", "4", "5", "6"],
        },
    },
}

function GlobalAgpChart() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Card title</Card.Title>
                <Card.Options>
                    <Button color="primary" size="sm">
                        Action 1
                    </Button>
                    <Button color="secondary" size="sm" className="ml-2">
                        Action 2
                    </Button>
                </Card.Options>
            </Card.Header>
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

export default GlobalAgpChart
