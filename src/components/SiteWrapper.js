// @flow

import React, { Component } from 'react'

import {
    Site,
    Nav,
    Grid,
    List,
    Button,
    RouterContextProvider,
} from 'tabler-react';



export class SiteWrapper extends Component {
    state = {
        notificationsObjects: [
            {
                unread: true,
                avatarURL: "demo/faces/male/41.jpg",
                message: (
                    <React.Fragment>
                        <strong>Nathan</strong> pushed new commit: Fix page load performance
                        issue.
                    </React.Fragment>
                ),
                time: "10 minutes ago",
            },
            {
                unread: true,
                avatarURL: "demo/faces/female/1.jpg",
                message: (
                    <React.Fragment>
                        <strong>Alice</strong> started new task: Tabler UI design.
                    </React.Fragment>
                ),
                time: "1 hour ago",
            },
            {
                unread: false,
                avatarURL: "demo/faces/female/18.jpg",
                message: (
                    <React.Fragment>
                        <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
                    </React.Fragment>
                ),
                time: "2 hours ago",
            },
        ],
    };
    static propTypes = {

    }


    render() {
        const notificationsObjects = this.state.notificationsObjects || [];

        return (
            <h1>Site wrapper</h1>
        )
    }
}

export default SiteWrapper
