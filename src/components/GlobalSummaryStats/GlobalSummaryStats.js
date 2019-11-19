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
                    total="42"
                    label="Unique Voters"
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
                                    data1: "Unique Voters",
                                },
                                columns: [["data1", 30, 20, 15, 20, 22, 33, 42]],
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
                    total="2765700"
                    label="ANT Used in Voting"
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
                                    data1: "ANT Used in Voting",
                                },
                                columns: [["data1", 24000000, 20030700, 14030700, 16030700, 21065700, 37657500, 31657000]],
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
                    total="6"
                    label="Unique Delegates"
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
                                    data1: "Unique Delegates",
                                },
                                columns: [["data1", 0, 0, 0, 0, 2, 3, 6]],
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
                    total="20657000"
                    label="Delegated ANT"
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
                                    data1: "Delegated ANT",
                                },
                                columns: [["data1", 0, 0, 0, 0, 8657000, 12657000, 20657000]],
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
