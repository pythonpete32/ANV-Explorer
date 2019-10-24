import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";

import {
    Site,
    Nav,
    Grid,
    List,
    Button,
    RouterContextProvider,
} from 'tabler-react';

const navBarItems = [
    {
        value: "Home",
        to: "/",
        icon: "home",
        LinkComponent: withRouter(NavLink),
        useExact: true,
    },
    {
        value: "Global Statistics",
        icon: "box",
        subItems: [
            { value: "Sub Menu 1", to: "/cards", LinkComponent: withRouter(NavLink) },
            { value: "Sub Menu 2", to: "/charts", LinkComponent: withRouter(NavLink) },
            { value: "Sub Menu 3", to: "/pricing-cards", LinkComponent: withRouter(NavLink) },
        ],
    },
    {
        value: "AGP Statistics",
        icon: "calendar",
        subItems: [
            { value: "AGPs", to: "/agps", LinkComponent: withRouter(NavLink) },
            { value: "Sub Menu 2", to: "/icons", LinkComponent: withRouter(NavLink) },
            { value: "Sub Menu 3", to: "/store", LinkComponent: withRouter(NavLink) },
            { value: "Sub Menu 4", to: "/blog", LinkComponent: withRouter(NavLink) },
        ],
    },
    {
        value: "Voter Statistics",
        icon: "file",
        subItems: [
            { value: "Sub Menu 1", to: "/profile", LinkComponent: withRouter(NavLink) },
            { value: "Sub Menu 2", to: "/login", LinkComponent: withRouter(NavLink) },
            { value: "Sub Menu 3", to: "/register", LinkComponent: withRouter(NavLink), },
            { value: "FSub Menu 4", to: "/forgot-password", LinkComponent: withRouter(NavLink) },
            { value: "Sub Menu 5", to: "/400", LinkComponent: withRouter(NavLink) },
            { value: "Sub Menu 6", to: "/401", LinkComponent: withRouter(NavLink) },
            { value: "Sub Menu 7", to: "/403", LinkComponent: withRouter(NavLink) },
            { value: "Sub Menu 8", to: "/404", LinkComponent: withRouter(NavLink) },
        ],
    },
    {
        icon: "file-text",
        value: "Documentation",
        to:
            process.env.NODE_ENV === "production"
                ? "https://tabler.github.io/tabler-react/documentation"
                : "/documentation",
    },
];

const accountDropdownProps = {
    avatarURL: "./demo/faces/female/25.jpg",
    name: "Python Pete",
    description: "0x75B98........3161D",
    options: [
        { icon: "user", value: "Profile" },
        { icon: "settings", value: "Settings" },
        { icon: "mail", value: "Inbox", badge: "6" },
        { icon: "send", value: "Message" },
        { isDivider: true },
        { icon: "help-circle", value: "Need help?" },
        { icon: "log-out", value: "Sign out" },
    ],
};

export class SiteWrapper extends Component {
    state = {
        notificationsObjects: [
            {
                unread: true,
                avatarURL: "demo/faces/male/41.jpg",
                message: (
                    <React.Fragment>
                        <strong>ANV 4</strong> Finished: Results are in!
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
                        <strong>AGP 33</strong> Vote Flipped: Vote flipped from Yay to Nay
                    </React.Fragment>
                ),
                time: "1 hour ago",
            },
            {
                unread: false,
                avatarURL: "demo/faces/female/18.jpg",
                message: (
                    <React.Fragment>
                        <strong>AGP 21</strong>  Vote Flipped: Vote flipped from Nay to Yay
                    </React.Fragment>
                ),
                time: "2 hours ago",
            },
            {
                unread: false,
                avatarURL: "demo/faces/female/18.jpg",
                message: (
                    <React.Fragment>
                        <strong>ANV 4</strong> Started: 8 new ballots to vote on
                    </React.Fragment>
                ),
                time: "3 days ago",
            },
        ],
    };
    static propTypes = {

    }


    render() {
        const notificationsObjects = this.state.notificationsObjects || [];

        return (
            <Site.Wrapper
                headerProps={{
                    href: "/",
                    alt: "ANV DashBoard",
                    imageURL: '../images/brand/tabler.svg',
                    navItems: (
                        <Nav.Item type="div" className="d-none d-md-flex">
                            <Button
                                href="https://github.com/pythonpete32"
                                target="_blank"
                                outline
                                size="sm"
                                RootComponent="a"
                                color="primary"
                            >
                                Open DAO
                            </Button>
                        </Nav.Item>
                    ),
                    notificationsTray: {
                        notificationsObjects,
                        markAllAsRead: () =>
                            this.setState(
                                () => ({
                                    notificationsObjects: this.state.notificationsObjects.map(
                                        v => ({ ...v, unread: false })
                                    ),
                                }),
                                () =>
                                    setTimeout(
                                        () =>
                                            this.setState({
                                                notificationsObjects: this.state.notificationsObjects.map(
                                                    v => ({ ...v, unread: true })
                                                ),
                                            }),
                                        5000
                                    )
                            ),
                        unread: 4,
                    },
                    accountDropdown: accountDropdownProps,
                }}
                navProps={{ itemsObjects: navBarItems }}
                routerContextComponentType={withRouter(RouterContextProvider)}
                footerProps={{
                    links: [
                        <a href="#">First Link</a>,
                        <a href="#">Second Link</a>,
                        <a href="#">Third Link</a>,
                        <a href="#">Fourth Link</a>,
                        <a href="#">Five Link</a>,
                        <a href="#">Sixth Link</a>,
                        <a href="#">Seventh Link</a>,
                        <a href="#">Eigth Link</a>,
                    ],
                    note:
                        "Open Source dashboard For analyzing your Aragon Voting App",
                    copyright: (
                        <React.Fragment>
                            Copyright © 2019
                            <a href="."> Python Pete</a>. Theme by
                                <a
                                href="https://codecalm.net"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                codecalm.net
                                </a>{" "}
                            All rights reserved.
                        </React.Fragment>
                    ),
                    nav: (
                        <React.Fragment>
                            <Grid.Col auto={true}>
                                <List className="list-inline list-inline-dots mb-0">
                                    <List.Item className="list-inline-item">
                                        <a href="./docs/index.html">Documentation</a>
                                    </List.Item>
                                    <List.Item className="list-inline-item">
                                        <a href="./faq.html">FAQ</a>
                                    </List.Item>
                                </List>
                            </Grid.Col>
                            <Grid.Col auto={true}>
                                <Button
                                    href="https://github.com/pythonpete32"
                                    size="sm"
                                    outline
                                    color="primary"
                                    RootComponent="a"
                                >
                                    Source code
                                </Button>
                            </Grid.Col>
                        </React.Fragment>
                    ),
                }}
            >
                {this.props.children}
            </Site.Wrapper>
        )
    }
}

export default SiteWrapper
