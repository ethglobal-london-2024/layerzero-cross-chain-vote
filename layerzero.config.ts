import { EndpointId } from '@layerzerolabs/lz-definitions'

const baseContract = {
    eid: EndpointId.BASE_MAINNET,
    contractName: 'SourceVoterOApp',
}

const arbitrumContract = {
    eid: EndpointId.ARBITRUM_MAINNET,
    contractName: 'DestinationVoterOApp',
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
        },
    ],
}
