import React from "react";

import { Page, Grid, Alert } from "tabler-react";

import SiteWrapper from "../components/SiteWrapper";
import GlobalSummaryStats from "../components/GlobalSummaryStats";
import GlobalAgpChart from "../components/GlobalAgpChart";
import QuorumGaugeCard from "../components/QuorumGaugeCard";
import UniqueVoters from "../components/UniqueVoters";


function HomePage() {
    return (
        <SiteWrapper>
            <Page.Content>
                <GlobalSummaryStats />
                <GlobalAgpChart />=
                <Grid.Row>
                    <Grid.Col lg={8}>
                        <UniqueVoters />
                    </Grid.Col>
                    <Grid.Col lg={4}>
                        {<Alert type="primary">
                            Some Global Metric Stuff
                        </Alert>}
                        <QuorumGaugeCard quorum={18} />
                        <QuorumGaugeCard quorum={38} />
                        <QuorumGaugeCard quorum={68} />
                    </Grid.Col>
                </Grid.Row>
            </Page.Content>
        </SiteWrapper>
    )
}

export default HomePage
