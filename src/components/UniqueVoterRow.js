import React from 'react'
import { EthIdenticon } from '@aragon/ui'

import {

    Icon,
    Progress,

    Table,

} from "tabler-react";

function UniqueVoterRow(props) {
    return (
        <Table.Row>
            <Table.Col className="w-1">
                <EthIdenticon
                    address="0xcafe1a77e84698c83Ca8931f54a755176ef75f2c"
                    scale={1.5}
                    radius={50}
                    soften={0.4} />
            </Table.Col>
            <Table.Col>0x5605...8152</Table.Col>
            <Table.Col>{props.ant + ` ANT`}</Table.Col>
            <Table.Col className="text-nowrap">
                <Progress size="s">
                    {console.log("stake ", props.stake)}
                    {(props.stake < 0) ? <Progress.Bar color="red" width={Math.abs(props.stake)} /> : <Progress.Bar color="green" width={props.stake} />}
                </Progress>
            </Table.Col>
            <Table.Col className="w-1">
                <Icon link={true} name="more-vertical" />
            </Table.Col>
        </Table.Row>
    )
}

export default UniqueVoterRow
