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
                    <Table.Row>
                        <Table.Col className="w-1">
                            <EthIdenticon address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
                                scale={1.5}
                                radius={50}
                                soften={0.4} />
                        </Table.Col>
                        <Table.Col>0x5605...8152</Table.Col>
                        <Table.Col>100,000,00 ANT</Table.Col>
                        <Table.Col className="text-nowrap">
                            <Progress size="s">
                                <Progress.Bar color="green" width={12} />
                            </Progress>
                        </Table.Col>
                        <Table.Col className="w-1">
                            <Icon link={true} name="more-vertical" />
                        </Table.Col>
                    </Table.Row>
                    <Table.Row>
                        <Table.Col className="w-1">
                            <Avatar imageURL="./demo/faces/male/9.jpg" />
                        </Table.Col>
                        <Table.Col>0x5605...8152</Table.Col>
                        <Table.Col>90,000,00 ANT</Table.Col>
                        <Table.Col className="text-nowrap">
                            <Progress size="s">
                                <Progress.Bar color="green" width={2} />
                            </Progress>
                        </Table.Col>
                        <Table.Col className="w-1">
                            <Icon link={true} name="more-vertical" />
                        </Table.Col>
                    </Table.Row>                    <Table.Row>
                        <Table.Col className="w-1">
                            <Avatar imageURL="./demo/faces/male/9.jpg" />
                        </Table.Col>
                        <Table.Col>0x5605...8152</Table.Col>
                        <Table.Col>85,000,00 ANT</Table.Col>
                        <Table.Col className="text-nowrap">
                            <Progress size="s">
                                <Progress.Bar color="red" width={5} />
                            </Progress>
                        </Table.Col>
                        <Table.Col className="w-1">
                            <Icon link={true} name="more-vertical" />
                        </Table.Col>
                    </Table.Row>                    <Table.Row>
                        <Table.Col className="w-1">
                            <Avatar imageURL="./demo/faces/male/9.jpg" />
                        </Table.Col>
                        <Table.Col>0x5605...8152</Table.Col>
                        <Table.Col>77,000,00 ANT</Table.Col>
                        <Table.Col className="text-nowrap">
                            <Progress size="s">
                                <Progress.Bar color="red" width={23} />
                            </Progress>
                        </Table.Col>
                        <Table.Col className="w-1">
                            <Icon link={true} name="more-vertical" />
                        </Table.Col>
                    </Table.Row>                    <Table.Row>
                        <Table.Col className="w-1">
                            <Avatar imageURL="./demo/faces/male/9.jpg" />
                        </Table.Col>
                        <Table.Col>0x5605...8152</Table.Col>
                        <Table.Col>71,000,00 ANT</Table.Col>
                        <Table.Col className="text-nowrap">
                            <Progress size="s">
                                <Progress.Bar color="green" width={3} />
                            </Progress>
                        </Table.Col>
                        <Table.Col className="w-1">
                            <Icon link={true} name="more-vertical" />
                        </Table.Col>
                    </Table.Row>                    <Table.Row>
                        <Table.Col className="w-1">
                            <Avatar imageURL="./demo/faces/male/9.jpg" />
                        </Table.Col>
                        <Table.Col>0x5605...8152</Table.Col>
                        <Table.Col>66,000,00 ANT</Table.Col>
                        <Table.Col className="text-nowrap">
                            <Progress size="s">
                                <Progress.Bar color="green" width={40} />
                            </Progress>
                        </Table.Col>
                        <Table.Col className="w-1">
                            <Icon link={true} name="more-vertical" />
                        </Table.Col>
                    </Table.Row>                    <Table.Row>
                        <Table.Col className="w-1">
                            <Avatar imageURL="./demo/faces/male/9.jpg" />
                        </Table.Col>
                        <Table.Col>0x5605...8152</Table.Col>
                        <Table.Col>52,000,00 ANT</Table.Col>
                        <Table.Col className="text-nowrap">
                            <Progress size="s">
                                <Progress.Bar color="red" width={12} />
                            </Progress>
                        </Table.Col>
                        <Table.Col className="w-1">
                            <Icon link={true} name="more-vertical" />
                        </Table.Col>
                    </Table.Row>                    <Table.Row>
                        <Table.Col className="w-1">
                            <Avatar imageURL="./demo/faces/male/9.jpg" />
                        </Table.Col>
                        <Table.Col>0x5605...8152</Table.Col>
                        <Table.Col>46,000,00 ANT</Table.Col>
                        <Table.Col className="text-nowrap">
                            <Progress size="s">
                                <Progress.Bar color="green" width={8} />
                            </Progress>
                        </Table.Col>
                        <Table.Col className="w-1">
                            <Icon link={true} name="more-vertical" />
                        </Table.Col>
                    </Table.Row>                    <Table.Row>
                        <Table.Col className="w-1">
                            <Avatar imageURL="./demo/faces/male/9.jpg" />
                        </Table.Col>
                        <Table.Col>0x5605...8152</Table.Col>
                        <Table.Col>41,000,00 ANT</Table.Col>
                        <Table.Col className="text-nowrap">
                            <Progress size="s">
                                <Progress.Bar color="green" width={22} />
                            </Progress>
                        </Table.Col>
                        <Table.Col className="w-1">
                            <Icon link={true} name="more-vertical" />
                        </Table.Col>
                    </Table.Row>                    <Table.Row>
                        <Table.Col className="w-1">
                            <Avatar imageURL="./demo/faces/male/9.jpg" />
                        </Table.Col>
                        <Table.Col>0x5605...8152</Table.Col>
                        <Table.Col>40,000,00 ANT</Table.Col>
                        <Table.Col className="text-nowrap">
                            <Progress size="s">
                                <Progress.Bar color="red" width={1} />
                            </Progress>
                        </Table.Col>
                        <Table.Col className="w-1">
                            <Icon link={true} name="more-vertical" />
                        </Table.Col>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Card>
    )
}

export default UniqueVoters
