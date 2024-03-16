import { EndpointId } from '@layerzerolabs/lz-definitions'

const baseContract = {
    eid: EndpointId.BASE_MAINNET,
    contractName: 'SourceVoterOApp',
    address: '0xCeeF0be32E21205b14a9ABa2A23A54248556D3a7',
}

const arbitrumContract = {
    eid: EndpointId.ARBITRUM_MAINNET,
    contractName: 'DestinationVoterOApp',
    address: '0x6E4DeF79780469D19E052bC96D8eEd153E0B0477',
}

export default {
    contracts: [
        {
            contract: baseContract,
        },
        {
            contract: arbitrumContract,
        },
    ],
    connections: [
        {
            from: baseContract,
            to: arbitrumContract,
            config: {
                // enforcedOptions: [
                //     {
                //         msgType: 1,
                //         gas: 200000,
                //         value: 0,
                //     },
                // ],
            },
        },

        {
            from: baseContract,
            to: arbitrumContract,
            config: {
                // enforcedOptions: [
                //     {
                //         msgType: 1,
                //         gas: 200000,
                //         value: 0,
                //     },
                // ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0x8ddF05F9A5c488b4973897E278B58895bF87Cb24',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
    ],
}
