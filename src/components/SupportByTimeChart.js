import React from 'react'

import { Page, Grid, Card, colors } from "tabler-react";


import C3Chart from "react-c3js";

const sumSupport = (arr) => {
    var sum = 0
    const newArray = []
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
        newArray.push(sum)
    }
    return newArray
}

const blockNumber = [
    "7116520",
    "7116821",
    "7116960",
    "7117182",
    "7117528",
    "7117805",
    "7117807",
    "7118025",
    "7118248",
    "7118444",
    "7119754",
    "7119849",
    "7119863",
    "7119926",
    "7120000",
    "7121096",
    "7121229",
    "7121245",
    "7121711",
    "7121982",
    "7122136",
    "7122859",
    "7122924",
    "7122977",
    "7123368",
    "7123378",
    "7123494",
    "7123565",
    "7123852",
    "7124193",
    "7124997",
    "7125026",
    "7125269",
    "7125357",
    "7125684",
    "7125750",
    "7125754",
    "7125937",
    "7125949",
    "7125957",
    "7125962"
]

const yes = [
    1510.761544,
    2987.342012,
    5602.726497,
    218.4081505,
    202.3750482,
    47548.26097,
    0,
    24.1633327,
    0,
    1800,
    2501.194388,
    1.010973935,
    243.3878319,
    0.05363874,
    698.7,
    6169.916293,
    46453.40167,
    100,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20390.99009,
    594143,
    100,
    13.7,
    114.0155314,
    0,
    0,
    0,
    207593.4902,
    50,
    90.00002093,
    10,
    20000,
    501,
    5000,
    5000
]

const no = [
    0,
    0,
    0,
    0,
    0,
    0,
    47548.26097,
    0,
    4804.08711,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4000,
    24840,
    13317.96704,
    89575.16863,
    3314.021289,
    2097.994,
    102269.2319,
    0,
    0,
    0,
    0,
    0,
    100000,
    7474.25633,
    396770.7994,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]

const yesVotes = sumSupport(yes)
const noVotes = sumSupport(no)

yesVotes.unshift("Yes Votes")
noVotes.unshift("No Votes")

const voters = [
    `0x2b5afa7a939e475a327c763f725d88e8a92ce342`,
    `0x839395e20bbb182fa440d08f850e6c7a8f6f0780`,
    `0xd472fa32294977196b9ad47e7865e0d737220e32`,
    `0xbfc7cae0fad9b346270ae8fde24827d2d779ef07`,
    `0x86e1c887490b57fd84231d048466efea9f1c762a`,
    `0x450c0c90706a8cc664e8b496711370b43415715d`,
    `0x450c0c90706a8cc664e8b496711370b43415715d`,
    `0xc7b51a1637f86f130686eebd1aae67c051888351`,
    `0xb62e27446079c2f2575c79274cd905bf1e1e4edb`,
    `0xad2dcb058f10b4e11611f9c1fc0aa1a532e270d6`,
    `0x4941105e6d11cff9be097a837cb68091f59a029c`,
    `0xe730b30256bd9d3f5cbfdaad0f584307876acd25`,
    `0xf0bea4a25b280955417b1ca0c2519a5f6e752fae`,
    `0xd395d4a9753310f3940de2673c70c251224e3d07`,
    `0x165cc5f47cdb55bad3282b6543cbbf6542e06cdc`,
    `0xf1f0c294d247e8691d1118a86ccc669da3c75ca8`,
    `0xcafb4ff79d39949d29e2ec4eb6b42c1e7b4d8b2b`,
    `0x583da21ad0c1171ae4b6cf24d92c46f033a0a794`,
    `0x17de335cda63c144037b6fe43fadc7f9d0c21bb6`,
    `0xefa62e5ca8f914d3bb2c9ffa3da9c1cd2bd8bdd2`,
    `0x4323b6f87e3ad7719b4a2ed791957faf96752bd4`,
    `0x702eccb2b9bf886e27b0698601dc735501b9b546`,
    `0x89e3a87a5d46b6cfe8c162558be3609478b29922`,
    `0x90fc1f495111329a1669716a149b7da88bdcb234`,
    `0xa34f16c747e7eb21a32c28bde173c2fb099c70a1`,
    `0xa4ae57a1b051ff0980bc9dc59c36cd65f0fa7a11`,
    `0xaf54743051f61fda465609460f081c9aa426569e`,
    `0xa24b814aa745fd03893d6f63082ecd5d6fd0fca2`,
    `0xf925fdaea552d36a5291335941ab7a046f960a80`,
    `0x003dc32fe920a4aaeed12dc87e145f030aa753f3`,
    `0x0ed8f275eab9edf99120c4b101c232ff46ef7145`,
    `0x580356c776bd73948b153cfc94a5d3a12c359bba`,
    `0x471c1bbf19cd5a7b57e66f82a5b0d1668c8d65f9`,
    `0xb8506be2c700641873108a1a47d8e509157cf231`,
    `0xbc62985faabed27a8f174cbd5ea1ee7b1ed8fc12`,
    `0xdacc0fd259ce0de2829b38a0765970e7ab65346c`,
    `0x0f01a0c3f5255745f31a7fbd555ec6461f405287`,
    `0x9ab0b3323b1c9035b90ca4f1e462bb72c5417503`,
    `0x024dbaaec9a8dc1cb8bc3bd3867942e5f0080498`,
    `0xdc3cb2d624f5afcbb2e7ecf4b0781f798dc522cb`,
    `0x76d7dd8e16149e5242c2eb9da62268ca02e2b320`,
]



const chart = {
    title: "AGP Results",
    data: {
        columns: [
            // each columns data
            yesVotes,
            noVotes,
        ],
        type: "step", // default type of chart
        colors: {
            data1: colors["green"],
            data2: colors["red"],
        },
        names: {
            // name of each series
            data1: "Yay",
            data2: "Nay",
        },
    },
    axis: {
        x: {
            type: "Block Number",
            // name of each category
            categories: blockNumber,
        },
    },
}
console.log("yes: ", yes)
console.log("yesVotes: ", yesVotes)

function SupportByTimeChart() {
    return (
        <C3Chart
            data={chart.data}
            axis={chart.axis}
            legend={{
                show: false, //hide legend
            }}
            padding={{
                bottom: 0,
                top: 0,
            }}
        />
    )
}

export default SupportByTimeChart