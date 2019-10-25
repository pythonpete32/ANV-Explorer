import React from "react";

import { Page, Card, Button, Grid } from "tabler-react";

import SiteWrapper from "../components/SiteWrapper";
import AgpTable from "../components/AgpTable";
import AgpTableRow from '../components/AgpTableRow';
import SupportByTimeChart from "../components/SupportByTimeChart";
import VoterWeightPieChart from "../components/VoterWeightPieChart";


function AgpPage() {
    return (
        <SiteWrapper>
            <Page.Content>
                <Grid.Row cards deck>
                    <Grid.Col md={6} xl={8}>
                        <Card>
                            <Card.Header>
                                <Card.Title>Panel with custom buttons</Card.Title>
                                <Card.Options>
                                    <Button RootComponent="a" color="primary" size="sm">
                                        Action 1
                                    </Button>
                                    <Button
                                        RootComponent="a"
                                        color="secondary"
                                        size="sm"
                                        className="ml-2"
                                    >
                                        Action 2
                                    </Button>
                                </Card.Options>
                            </Card.Header>
                            <SupportByTimeChart />
                        </Card>
                    </Grid.Col>
                    <Grid.Col md={6} xl={4}>
                        <VoterWeightPieChart />
                    </Grid.Col>
                </Grid.Row>

                <AgpTable>
                </AgpTable>
            </Page.Content >
        </SiteWrapper >
    )
}

export default AgpPage