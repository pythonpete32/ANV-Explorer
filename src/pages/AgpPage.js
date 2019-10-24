import React from "react";

import { Page } from "tabler-react";

import SiteWrapper from "../components/SiteWrapper";
import AgpTable from "../components/AgpTable";
import AgpTableRow from '../components/AgpTableRow';


function AgpPage() {
    return (
        <SiteWrapper>
            <Page.Content>
                <AgpTable>
                    <AgpTableRow />
                    <AgpTableRow />
                    <AgpTableRow />
                    <AgpTableRow />
                    <AgpTableRow />
                </AgpTable>
            </Page.Content>
        </SiteWrapper>
    )
}

export default AgpPage