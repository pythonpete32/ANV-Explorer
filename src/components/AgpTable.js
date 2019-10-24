import React from 'react'

import { Card, Table, Text, Progress, Dropdown } from "tabler-react";

import C3Chart from "react-c3js";

import SiteWrapper from "../components/SiteWrapper";
import AgpTableRow from './AgpTableRow';

function AgpTable() {
    return (
        <Card>
            <Table
                responsive
                highlightRowOnHover
                hasOutline
                verticalAlign="center"
                cards
                className="text-nowrap"
            >
                <Table.Header>
                    <Table.Row>
                        <Table.ColHeader>Vote</Table.ColHeader>
                        <Table.ColHeader>Details</Table.ColHeader>
                        <Table.ColHeader>Status</Table.ColHeader>
                        <Table.ColHeader>Quorum</Table.ColHeader>
                        <Table.ColHeader>Participants</Table.ColHeader>
                        <Table.ColHeader>Passing</Table.ColHeader>
                        <Table.ColHeader alignContent="center">
                            <i className="icon-settings" />
                        </Table.ColHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <AgpTableRow />
                    <AgpTableRow />
                    <AgpTableRow />
                    <AgpTableRow />
                </Table.Body>
            </Table>
        </Card>
    )
}

export default AgpTable
