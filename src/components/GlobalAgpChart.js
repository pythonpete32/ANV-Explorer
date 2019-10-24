import React from 'react'

import { Page, Grid, Card, colors } from "tabler-react";


import C3Chart from "react-c3js";

const chart = {
    title: "AGP Results",
    data: {
        columns: [
            // each columns data
            ["data1", 11, 8, 15, 18, 19, 17],
            ["data2", 7, 7, 5, 7, 9, 12],
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
        <Grid.Row>
            <Grid.Col md={12} xl={14}>
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
            </Grid.Col>
        </Grid.Row>
    )
}

export default GlobalAgpChart
