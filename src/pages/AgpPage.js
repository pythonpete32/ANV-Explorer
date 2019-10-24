import React from "react";

import { Page, Card, Button } from "tabler-react";

import SiteWrapper from "../components/SiteWrapper";
import AgpTable from "../components/AgpTable";
import AgpTableRow from '../components/AgpTableRow';
import SupportByTimeChart from "../components/SupportByTimeChart";


function AgpPage() {
    return (
        <SiteWrapper>
            <Page.Content>
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
                <AgpTable>
                </AgpTable>
            </Page.Content>
        </SiteWrapper>
    )
}

export default AgpPage