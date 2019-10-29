import React from 'react'
import { Page, Grid, Alert } from "tabler-react";

import SiteWrapper from "../components/SiteWrapper";
import VoterCards from '../components/VoterCards';
import UniqueVoters from '../components/UniqueVoters';

function VoterPage() {
    return (
        <SiteWrapper>
            <Page.Content>
                <VoterCards />
                <UniqueVoters />
            </Page.Content>
        </SiteWrapper>
    )
}

export default VoterPage
