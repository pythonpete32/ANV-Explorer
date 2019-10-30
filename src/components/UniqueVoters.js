import React from 'react'
import { EthIdenticon } from '@aragon/ui'

import {
    Avatar,
    Icon,
    Progress,
    Card,
    Table,
    colors,
} from "tabler-react";

import C3Chart from "react-c3js";
import UniqueVoterRow from './UniqueVoterRow';

const columns = [["data1", 32, 34, 30, 27, 35, 40, 48, 30, 46, 44, 30, 43, 55, 68, 29, 17, 16, 19, 19, 18, 12, 13, 14]]

function UniqueVoters() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Largest Active Token Holders</Card.Title>
            </Card.Header>
            <C3Chart
                style={{ height: "10rem" }}
                data={{
                    columns: columns,
                    type: "area", // default type of chart
                    groups: [["data1", "data2", "data3"]],
                    colors: {
                        data1: colors["blue"],
                    },
                    names: {
                        // name of each serie
                        data1: "Unique Voters per Ballot",
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
                legend={{
                    position: "inset",
                    padding: 0,
                    inset: {
                        anchor: "top-left",
                        x: 20,
                        y: 8,
                        step: 10,
                    },
                }}
                tooltip={{
                    format: {
                        title: function (x) {
                            return "";
                        },
                    },
                }}
                padding={{
                    bottom: 0,
                    left: -1,
                    right: -1,
                }}
                point={{
                    show: false,
                }}
            />
            <Table
                cards={true}
                striped={true}
                responsive={true}
                className="table-vcenter"
            >
                <Table.Header>
                    <Table.Row>
                        <Table.ColHeader colSpan={2}>TokenHolder</Table.ColHeader>
                        <Table.ColHeader>Voting Weight</Table.ColHeader>
                        <Table.ColHeader>Change this Quarter</Table.ColHeader>
                        <Table.ColHeader />
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <UniqueVoterRow
                        address={`0xcafe1a77e84698c83Ca8931f54a755176ef75f2c`}
                        ant={"100,000,00"}
                        stake={-10}
                    />
                    <UniqueVoterRow />
                    <UniqueVoterRow />
                    <UniqueVoterRow />
                    <UniqueVoterRow />
                </Table.Body>
            </Table>
        </Card>
    )
}

export default UniqueVoters
