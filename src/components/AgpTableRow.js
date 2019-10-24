import React from 'react'
import { Table, Text, Progress, Dropdown, Badge } from "tabler-react";

function AgpTableRow() {
    return (
        <Table.Row>
            <Table.Col alignContent="center">
                <Text size="xl"> 1 </Text>
            </Table.Col>
            <Table.Col>
                <div>AGP 12</div>
                <Text size="sm" muted>
                    Give everyone free money
                            </Text>
            </Table.Col>
            <Table.Col>
                <React.Fragment>
                    <span className="status-icon bg-success" /> Open
                            </React.Fragment>
            </Table.Col>
            <Table.Col alignContent="center">
                <div className="clearfix">
                    <div className="float-center">
                        <strong>42%</strong>
                    </div>
                </div>
                <Progress size="xs">
                    <Progress.Bar color="yellow" width={42} />
                </Progress>
            </Table.Col>
            <Table.Col alignContent="center">
                <div className="float-center">
                    <strong>65</strong>
                </div>
            </Table.Col>
            <Table.Col alignContent="center">
                <React.Fragment>
                    <Badge color="danger" className="mr-1">
                        NAY
                    </Badge>
                </React.Fragment>
            </Table.Col>
            <Table.Col alignContent="center">
                <Dropdown
                    trigger={
                        <Dropdown.Trigger
                            icon="more-vertical"
                            toggle={false}
                        />
                    }
                    position="right"
                    items={
                        <React.Fragment>
                            <Dropdown.Item icon="tag">Action </Dropdown.Item>
                            <Dropdown.Item icon="edit-2">
                                Another action{" "}
                            </Dropdown.Item>
                            <Dropdown.Item icon="message-square">
                                Something else here
                            </Dropdown.Item>
                            <Dropdown.ItemDivider />
                            <Dropdown.Item icon="link">
                                {" "}
                                Separated link
                            </Dropdown.Item>
                        </React.Fragment>
                    }
                />
            </Table.Col>
        </Table.Row>
    )
}

export default AgpTableRow
