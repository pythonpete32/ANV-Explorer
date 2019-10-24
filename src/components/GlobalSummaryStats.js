import React from 'react'

import { Grid, StatsCard, } from "tabler-react"


import C3Chart from "react-c3js";

function GlobalSummaryStats() {
    return (
        <Grid.Row>
            <Grid.Col sm={6} lg={3}>
                <StatsCard
                    layout={2}
                    movement={5}
                    total="423"
                    label="Users online"
                    chart={
                        <C3Chart
                            style={{ height: "100%" }}
                            padding={{
                                bottom: -10,
                                left: -1,
                                right: -1,
                            }}
                            data={{
                                names: {
                                    data1: "Users online",
                                },
                                columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                                type: "area",
                            }}
                            legend={{
                                show: false,
                            }}
                            transition={{
                                duration: 0,
                            }}
                            point={{
                                show: false,
                            }}
                            tooltip={{
                                format: {
                                    title: function (x) {
                                        return "";
                                    },
                                },
                            }}
                            axis={{
                                y: {
                                    padding: {
                                        bottom: 0,
                                    },
                                    show: false,
                                    tick: {
                                        outer: false,
                                    },
                                },
                                x: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                    },
                                    show: false,
                                },
                            }}
                            color={{
                                pattern: ["#467fcf"],
                            }}
                        />
                    }
                />
            </Grid.Col>
            <Grid.Col sm={6} lg={3}>
                <StatsCard
                    layout={2}
                    movement={-3}
                    total="423"
                    label="Users online"
                    chart={
                        <C3Chart
                            style={{ height: "100%" }}
                            padding={{
                                bottom: -10,
                                left: -1,
                                right: -1,
                            }}
                            data={{
                                names: {
                                    data1: "Users online",
                                },
                                columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                                type: "area",
                            }}
                            legend={{
                                show: false,
                            }}
                            transition={{
                                duration: 0,
                            }}
                            point={{
                                show: false,
                            }}
                            tooltip={{
                                format: {
                                    title: function (x) {
                                        return "";
                                    },
                                },
                            }}
                            axis={{
                                y: {
                                    padding: {
                                        bottom: 0,
                                    },
                                    show: false,
                                    tick: {
                                        outer: false,
                                    },
                                },
                                x: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                    },
                                    show: false,
                                },
                            }}
                            color={{
                                pattern: ["#e74c3c"],
                            }}
                        />
                    }
                />
            </Grid.Col>
            <Grid.Col sm={6} lg={3}>
                <StatsCard
                    layout={2}
                    movement={-3}
                    total="423"
                    label="Users online"
                    chart={
                        <C3Chart
                            style={{ height: "100%" }}
                            padding={{
                                bottom: -10,
                                left: -1,
                                right: -1,
                            }}
                            data={{
                                names: {
                                    data1: "Users online",
                                },
                                columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                                type: "area",
                            }}
                            legend={{
                                show: false,
                            }}
                            transition={{
                                duration: 0,
                            }}
                            point={{
                                show: false,
                            }}
                            tooltip={{
                                format: {
                                    title: function (x) {
                                        return "";
                                    },
                                },
                            }}
                            axis={{
                                y: {
                                    padding: {
                                        bottom: 0,
                                    },
                                    show: false,
                                    tick: {
                                        outer: false,
                                    },
                                },
                                x: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                    },
                                    show: false,
                                },
                            }}
                            color={{
                                pattern: ["#5eba00"],
                            }}
                        />
                    }
                />
            </Grid.Col>
            <Grid.Col sm={6} lg={3}>
                <StatsCard
                    layout={2}
                    movement={9}
                    total="423"
                    label="Users online"
                    chart={
                        <C3Chart
                            style={{ height: "100%" }}
                            padding={{
                                bottom: -10,
                                left: -1,
                                right: -1,
                            }}
                            data={{
                                names: {
                                    data1: "Users online",
                                },
                                columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                                type: "area",
                            }}
                            legend={{
                                show: false,
                            }}
                            transition={{
                                duration: 0,
                            }}
                            point={{
                                show: false,
                            }}
                            tooltip={{
                                format: {
                                    title: function (x) {
                                        return "";
                                    },
                                },
                            }}
                            axis={{
                                y: {
                                    padding: {
                                        bottom: 0,
                                    },
                                    show: false,
                                    tick: {
                                        outer: false,
                                    },
                                },
                                x: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                    },
                                    show: false,
                                },
                            }}
                            color={{
                                pattern: ["#f1c40f"],
                            }}
                        />
                    }
                />
            </Grid.Col>
        </Grid.Row>
    )
}

export default GlobalSummaryStats
