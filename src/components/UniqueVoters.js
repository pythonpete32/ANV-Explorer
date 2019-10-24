import React from 'react'

import {
    Avatar,
    Icon,
    Grid,
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
                <Card.Title>Development Activity</Card.Title>
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
                        <Table.ColHeader colSpan={2}>User</Table.ColHeader>
                        <Table.ColHeader>Commit</Table.ColHeader>
                        <Table.ColHeader>Date</Table.ColHeader>
                        <Table.ColHeader />
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Col className="w-1">
                            <Avatar imageURL="./demo/faces/male/9.jpg" />
                        </Table.Col>
                        <Table.Col>Ronald Bradley</Table.Col>
                        <Table.Col>Initial commit</Table.Col>
                        <Table.Col className="text-nowrap">May 6, 2018</Table.Col>
                        <Table.Col className="w-1">
                            <Icon link={true} name="trash" />
                        </Table.Col>
                    </Table.Row>
                    <Table.Row>
                        <Table.Col>
                            <Avatar>BM</Avatar>
                        </Table.Col>
                        <Table.Col>Russell Gibson</Table.Col>
                        <Table.Col>Main structure</Table.Col>
                        <Table.Col className="text-nowrap">
                            April 22, 2018
                    </Table.Col>
                        <Table.Col>
                            <Icon link={true} name="trash" />
                        </Table.Col>
                    </Table.Row>
                    <Table.Row>
                        <Table.Col>
                            <Avatar imageURL="./demo/faces/female/1.jpg" />
                        </Table.Col>
                        <Table.Col>Beverly Armstrong</Table.Col>
                        <Table.Col>Left sidebar adjustments</Table.Col>
                        <Table.Col className="text-nowrap">
                            April 15, 2018
                    </Table.Col>
                        <Table.Col>
                            <Icon link={true} name="trash" />
                        </Table.Col>
                    </Table.Row>
                    <Table.Row>
                        <Table.Col>
                            <Avatar imageURL="./demo/faces/male/4.jpg" />
                        </Table.Col>
                        <Table.Col>Bobby Knight</Table.Col>
                        <Table.Col>Topbar dropdown style</Table.Col>
                        <Table.Col className="text-nowrap">April 8, 2018</Table.Col>
                        <Table.Col>
                            <Icon link={true} name="trash" />
                        </Table.Col>
                    </Table.Row>
                    <Table.Row>
                        <Table.Col>
                            <Avatar imageURL="./demo/faces/female/11.jpg" />
                        </Table.Col>
                        <Table.Col>Sharon Wells</Table.Col>
                        <Table.Col>Fixes #625</Table.Col>
                        <Table.Col className="text-nowrap">April 9, 2018</Table.Col>
                        <Table.Col>
                            <Icon link={true} name="trash" />
                        </Table.Col>
                    </Table.Row>
                    <Table.Row>
                        <Table.Col>
                            <Avatar imageURL="./demo/faces/female/11.jpg" />
                        </Table.Col>
                        <Table.Col>Sharon Wells</Table.Col>
                        <Table.Col>Fixes #625</Table.Col>
                        <Table.Col className="text-nowrap">April 9, 2018</Table.Col>
                        <Table.Col>
                            <Icon link={true} name="trash" />
                        </Table.Col>
                    </Table.Row>
                    <Table.Row>
                        <Table.Col>
                            <Avatar imageURL="./demo/faces/female/11.jpg" />
                        </Table.Col>
                        <Table.Col>Sharon Wells</Table.Col>
                        <Table.Col>Fixes #625</Table.Col>
                        <Table.Col className="text-nowrap">April 9, 2018</Table.Col>
                        <Table.Col>
                            <Icon link={true} name="trash" />
                        </Table.Col>
                    </Table.Row>
                    <Table.Row>
                        <Table.Col>
                            <Avatar imageURL="./demo/faces/female/11.jpg" />
                        </Table.Col>
                        <Table.Col>Sharon Wells</Table.Col>
                        <Table.Col>Fixes #625</Table.Col>
                        <Table.Col className="text-nowrap">April 9, 2018</Table.Col>
                        <Table.Col>
                            <Icon link={true} name="trash" />
                        </Table.Col>
                    </Table.Row>
                    <Table.Row>
                        <Table.Col>
                            <Avatar imageURL="./demo/faces/female/11.jpg" />
                        </Table.Col>
                        <Table.Col>Sharon Wells</Table.Col>
                        <Table.Col>Fixes #625</Table.Col>
                        <Table.Col className="text-nowrap">April 9, 2018</Table.Col>
                        <Table.Col>
                            <Icon link={true} name="trash" />
                        </Table.Col>
                    </Table.Row>
                    <Table.Row>
                        <Table.Col>
                            <Avatar imageURL="./demo/faces/female/11.jpg" />
                        </Table.Col>
                        <Table.Col>Sharon Wells</Table.Col>
                        <Table.Col>Fixes #625</Table.Col>
                        <Table.Col className="text-nowrap">April 9, 2018</Table.Col>
                        <Table.Col>
                            <Icon link={true} name="trash" />
                        </Table.Col>
                    </Table.Row>
                    <Table.Row>
                        <Table.Col>
                            <Avatar imageURL="./demo/faces/female/11.jpg" />
                        </Table.Col>
                        <Table.Col>Sharon Wells</Table.Col>
                        <Table.Col>Fixes #625</Table.Col>
                        <Table.Col className="text-nowrap">April 9, 2018</Table.Col>
                        <Table.Col>
                            <Icon link={true} name="trash" />
                        </Table.Col>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Card>
    )
}

export default UniqueVoters
