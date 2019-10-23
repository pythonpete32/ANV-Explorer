import React from "react";

import {
    Page,
    Avatar,
    Icon,
    Grid,
    Card,
    Text,
    Table,
    Alert,
    Progress,
    colors,
    Dropdown,
    Button,
    StampCard,
    StatsCard,
    ProgressCard,
    Badge,
} from "tabler-react";

import C3Chart from "react-c3js";

import SiteWrapper from "../components/SiteWrapper";
import { getDiffieHellman } from "crypto";


function HomePage() {
    return (
        <SiteWrapper>
            <Page.Content>
                <Grid.Row cards={true}>
                    <Grid.Col width={6} sm={4} lg={2}>
                        <StatsCard layout={1} movement={6} total="43" label="Total AGPs" />
                    </ Grid.Col>
                    <Grid.Col lg={6}>
                        <Card>
                            <Card.Header>
                                SOME CHART
                            </Card.Header>
                            <C3Chart
                                style={{ height: "12rem" }}
                                data={{
                                    columns: [
                                        // each columns data
                                        ["data1", 63],
                                        ["data2", 37],
                                    ],
                                    type: "donut", // default type of chart
                                    colors: {
                                        data1: colors["green"],
                                        data2: colors["green-light"],
                                    },
                                    names: {
                                        // name of each serie
                                        data1: "Maximum",
                                        data2: "Minimum",
                                    },
                                }}
                                legend={{
                                    show: false, //hide legend
                                }}
                                padding={{
                                    bottom: 0,
                                    top: 0,
                                }}
                            />
                        </Card>
                    </Grid.Col>
                </Grid.Row>
            </Page.Content>
        </SiteWrapper>
    )
}

export default HomePage
