import React from 'react'

import { Page, Grid, Alert, StatsCard } from "tabler-react";

function VoterCards() {
    return (
        <Grid.Row cards={true}>
            <Grid.Col width={6} sm={4} lg={2}>
                <StatsCard layout={1} movement={6} total="43" label="New Tickets" />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
                <StatsCard
                    layout={1}
                    movement={-3}
                    total="17"
                    label="Closed Today"
                />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
                <StatsCard layout={1} movement={9} total="7" label="New Replies" />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
                <StatsCard
                    layout={1}
                    movement={3}
                    total="27.3k"
                    label="Followers"
                />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
                <StatsCard
                    layout={1}
                    movement={-2}
                    total="$95"
                    label="Daily earnings"
                />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
                <StatsCard layout={1} movement={-1} total="621" label="Products" />
            </Grid.Col>
        </Grid.Row>
    )
}

export default VoterCards
