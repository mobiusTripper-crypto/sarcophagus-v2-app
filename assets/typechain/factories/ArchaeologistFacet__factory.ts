/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ArchaeologistFacet,
  ArchaeologistFacetInterface,
} from "../ArchaeologistFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "archaeologist",
        type: "address",
      },
    ],
    name: "ArchaeologistAlreadyUnwrapped",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "archaeologist",
        type: "address",
      },
    ],
    name: "ArchaeologistNotOnSarcophagus",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cursedBond",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NotEnoughCursedBond",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "freeBond",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NotEnoughFreeBond",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NotEnoughReward",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "resurrectionTime",
        type: "uint256",
      },
    ],
    name: "ResurrectionTimeInPast",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
    ],
    name: "SarcophagusDoesNotExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
    ],
    name: "SarcophagusNotFinalized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "SignerNotArchaeologistOnSarcophagus",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "resurrectionTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentTime",
        type: "uint256",
      },
    ],
    name: "TooEarlyToUnwrap",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "resurrectionTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "resurrectionWindow",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentTime",
        type: "uint256",
      },
    ],
    name: "TooLateToUnwrap",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "unencryptedShard",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "doubleHashedShard",
        type: "bytes32",
      },
    ],
    name: "UnencryptedShardHashMismatch",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "archaeologist",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositedBond",
        type: "uint256",
      },
    ],
    name: "DepositFreeBond",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "arweaveTxId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldArchaeologist",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newArchaeologist",
        type: "address",
      },
    ],
    name: "FinalizeTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "unencryptedShard",
        type: "bytes",
      },
    ],
    name: "UnwrapSarcophagus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "archaeologist",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawnBond",
        type: "uint256",
      },
    ],
    name: "WithdrawFreeBond",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "archaeologist",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawnReward",
        type: "uint256",
      },
    ],
    name: "WithdrawReward",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositFreeBond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "arweaveTxId",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct LibTypes.Signature",
        name: "oldArchSignature",
        type: "tuple",
      },
    ],
    name: "finalizeTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "unencryptedShard",
        type: "bytes",
      },
    ],
    name: "unwrapSarcophagus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFreeBond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506123f4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063364e08011461005c578063523a3f081461007857806369afe1c5146100945780636a5ac74c146100b05780638d58642a146100cc575b600080fd5b6100766004803603810190610071919061197d565b6100e8565b005b610092600480360381019061008d919061197d565b6101e6565b005b6100ae60048036038101906100a99190611bc8565b6102e4565b005b6100ca60048036038101906100c5919061197d565b610773565b005b6100e660048036038101906100e19190611cd8565b610873565b005b6100f23382610b8d565b6000800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610151929190611d84565b6020604051808303816000875af1158015610170573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101949190611de5565b503373ffffffffffffffffffffffffffffffffffffffff167fd91b1e491a880123721b161dbbf8249668b0c546077d7ba4d0016441ca9d8f45826040516101db9190611e12565b60405180910390a250565b6101f03382610cbf565b6000800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161024f929190611d84565b6020604051808303816000875af115801561026e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102929190611de5565b503373ffffffffffffffffffffffffffffffffffffffff167fbc84835063c693975166f00cffb19f01a94c2db55b1bf259238c5da3594e5066826040516102d99190611e12565b60405180910390a250565b600160028111156102f8576102f7611e2d565b5b6000600b01600085815260200190815260200160002060010160009054906101000a900460ff16600281111561033157610330611e2d565b5b1461037357826040517f018da68800000000000000000000000000000000000000000000000000000000815260040161036a9190611e6b565b60405180910390fd5b61037c83610df1565b6103bd57826040517f3cb813720000000000000000000000000000000000000000000000000000000081526004016103b49190611e6b565b60405180910390fd5b6103df6000600b01600085815260200190815260200160002060020154610e25565b60006103f983836000015184602001518560400151610e6c565b90506104058482610f1e565b6104485783816040517fd93ccb2000000000000000000000000000000000000000000000000000000000815260040161043f929190611e86565b60405180910390fd5b60005b6000600b01600086815260200190815260200160002060090180549050811015610583578173ffffffffffffffffffffffffffffffffffffffff166000600b01600087815260200190815260200160002060090182815481106104b1576104b0611eaf565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361057057336000600b016000878152602001908152602001600020600901828154811061052357610522611eaf565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610583565b808061057b90611f0d565b91505061044b565b5061058e8482610f90565b600080601001600086815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600080601001600087815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905080600001548260000181905550806001015482600101819055508060020154826002018190555060405180602001604052806000815250826003019080519060200190610688929190611759565b5060008160000181905550600081600101819055506000801b8160020181905550604051806020016040528060008152508160030190805190602001906106d0929190611759565b506000600b016000878152602001908152602001600020600401859080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906107239291906117df565b5061072e86336110d4565b7fa11d6c318d830f7ace4ca677c932075082bc61f4356facae5a2a0e1c2a97454c868685336040516107639493929190611fdd565b60405180910390a1505050505050565b61077d3382611218565b6000800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b81526004016107de93929190612029565b6020604051808303816000875af11580156107fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108219190611de5565b503373ffffffffffffffffffffffffffffffffffffffff167ff882a0847c57aefe6f6c7df2098dd0afd122eb0e886199e223651b8e45fda823826040516108689190611e12565b60405180910390a250565b61087d8233611281565b6001600281111561089157610890611e2d565b5b6000600b01600084815260200190815260200160002060010160009054906101000a900460ff1660028111156108ca576108c9611e2d565b5b1461090c57816040517f018da6880000000000000000000000000000000000000000000000000000000081526004016109039190611e6b565b60405180910390fd5b6109168233610f1e565b61095757336040517f82881f0300000000000000000000000000000000000000000000000000000000815260040161094e9190612060565b60405180910390fd5b6109796000600b016000848152602001908152602001600020600201546112d9565b61098282610df1565b6109c357816040517f3cb813720000000000000000000000000000000000000000000000000000000081526004016109ba9190611e6b565b60405180910390fd5b60006109cf8333611385565b9050600082805190602001206040516020016109eb9190611e6b565b60405160208183030381529060405280519060200120905081604001518114610a51578282604001516040517fd6091bc2000000000000000000000000000000000000000000000000000000008152600401610a489291906120d0565b60405180910390fd5b826000601001600086815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003019080519060200190610abb929190611865565b50610ac68433610f90565b6001600060060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086815260200190815260200160002060006101000a81548160ff021916908315150217905550610b4f3383600001518460200151610b4a9190612100565b6114af565b837f2a1e0100e3bcf67538d8408f2592de3731b8b40f8c6d7dd813e355c7b73848d884604051610b7f9190612156565b60405180910390a250505050565b6000610b97611518565b90508060040160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115610c62578060040160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826040517fa4e3bead000000000000000000000000000000000000000000000000000000008152600401610c59929190612178565b60405180910390fd5b818160040160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cb391906121a1565b92505081905550505050565b6000610cc9611518565b905080600a0160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115610d945780600a0160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826040517f42681092000000000000000000000000000000000000000000000000000000008152600401610d8b929190612178565b60405180910390fd5b8181600a0160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610de591906121a1565b92505081905550505050565b600080610dfc611518565b9050600081600b0160008581526020019081526020016000206004018054905011915050919050565b428111610e6957806040517f357efa27000000000000000000000000000000000000000000000000000000008152600401610e609190611e12565b60405180910390fd5b50565b60008085604051602001610e809190612156565b60405160208183030381529060405280519060200120604051602001610ea6919061224d565b604051602081830303815290604052805190602001209050600060018287878760405160008152602001604052604051610ee39493929190612282565b6020604051602081039080840390855afa158015610f05573d6000803e3d6000fd5b5050506020604051035190508092505050949350505050565b600080610f29611518565b90506000801b81601001600086815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154141591505092915050565b6000610f9a611518565b9050600081601001600085815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820154815260200160028201548152602001600382018054611029906122f6565b80601f0160208091040260200160405190810160405280929190818152602001828054611055906122f6565b80156110a25780601f10611077576101008083540402835291602001916110a2565b820191906000526020600020905b81548152906001019060200180831161108557829003601f168201915b505050505081525050905060006110c18260000151836020015161151d565b90506110cd8482611533565b5050505050565b60006110de611518565b9050600081601001600085815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180608001604052908160008201548152602001600182015481526020016002820154815260200160038201805461116d906122f6565b80601f0160208091040260200160405190810160405280929190818152602001828054611199906122f6565b80156111e65780601f106111bb576101008083540402835291602001916111e6565b820191906000526020600020905b8154815290600101906020018083116111c957829003601f168201915b505050505081525050905060006112058260000151836020015161151d565b9050611211848261154b565b5050505050565b6000611222611518565b9050818160040160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112759190612100565b92505081905550505050565b600061128d8383611385565b606001515111156112d557806040517f1b933fa00000000000000000000000000000000000000000000000000000000081526004016112cc9190612060565b60405180910390fd5b5050565b428111156113205780426040517f0674c590000000000000000000000000000000000000000000000000000000008152600401611317929190612178565b60405180910390fd5b600061132b82611563565b905042818361133a9190612100565b1015611381578181426040517f4fd4cfc500000000000000000000000000000000000000000000000000000000815260040161137893929190612327565b60405180910390fd5b5050565b61138d6118eb565b6000611397611518565b905080601001600085815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820154815260200160028201548152602001600382018054611424906122f6565b80601f0160208091040260200160405190810160405280929190818152602001828054611450906122f6565b801561149d5780601f106114725761010080835404028352916020019161149d565b820191906000526020600020905b81548152906001019060200180831161148057829003601f168201915b50505050508152505091505092915050565b60006114b9611518565b90508181600a0160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461150c9190612100565b92505081905550505050565b600090565b6000818361152b9190612100565b905092915050565b61153d82826115be565b6115478282611218565b5050565b6115558282610b8d565b61155f82826116f0565b5050565b60008061070890506000606442851161158757844261158291906121a1565b611594565b428561159391906121a1565b5b61159e919061238d565b90508161ffff168110156115b4578161ffff1690505b8092505050919050565b60006115c8611518565b90508060050160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115611693578060050160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826040517faf5a111b00000000000000000000000000000000000000000000000000000000815260040161168a929190612178565b60405180910390fd5b818160050160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116e491906121a1565b92505081905550505050565b60006116fa611518565b9050818160050160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461174d9190612100565b92505081905550505050565b828054611765906122f6565b90600052602060002090601f01602090048101928261178757600085556117ce565b82601f106117a057805160ff19168380011785556117ce565b828001600101855582156117ce579182015b828111156117cd5782518255916020019190600101906117b2565b5b5090506117db9190611916565b5090565b8280546117eb906122f6565b90600052602060002090601f01602090048101928261180d5760008555611854565b82601f1061182657805160ff1916838001178555611854565b82800160010185558215611854579182015b82811115611853578251825591602001919060010190611838565b5b5090506118619190611916565b5090565b828054611871906122f6565b90600052602060002090601f01602090048101928261189357600085556118da565b82601f106118ac57805160ff19168380011785556118da565b828001600101855582156118da579182015b828111156118d95782518255916020019190600101906118be565b5b5090506118e79190611916565b5090565b6040518060800160405280600081526020016000815260200160008019168152602001606081525090565b5b8082111561192f576000816000905550600101611917565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61195a81611947565b811461196557600080fd5b50565b60008135905061197781611951565b92915050565b6000602082840312156119935761199261193d565b5b60006119a184828501611968565b91505092915050565b6000819050919050565b6119bd816119aa565b81146119c857600080fd5b50565b6000813590506119da816119b4565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a33826119ea565b810181811067ffffffffffffffff82111715611a5257611a516119fb565b5b80604052505050565b6000611a65611933565b9050611a718282611a2a565b919050565b600067ffffffffffffffff821115611a9157611a906119fb565b5b611a9a826119ea565b9050602081019050919050565b82818337600083830152505050565b6000611ac9611ac484611a76565b611a5b565b905082815260208101848484011115611ae557611ae46119e5565b5b611af0848285611aa7565b509392505050565b600082601f830112611b0d57611b0c6119e0565b5b8135611b1d848260208601611ab6565b91505092915050565b600080fd5b600060ff82169050919050565b611b4181611b2b565b8114611b4c57600080fd5b50565b600081359050611b5e81611b38565b92915050565b600060608284031215611b7a57611b79611b26565b5b611b846060611a5b565b90506000611b9484828501611b4f565b6000830152506020611ba8848285016119cb565b6020830152506040611bbc848285016119cb565b60408301525092915050565b600080600060a08486031215611be157611be061193d565b5b6000611bef868287016119cb565b935050602084013567ffffffffffffffff811115611c1057611c0f611942565b5b611c1c86828701611af8565b9250506040611c2d86828701611b64565b9150509250925092565b600067ffffffffffffffff821115611c5257611c516119fb565b5b611c5b826119ea565b9050602081019050919050565b6000611c7b611c7684611c37565b611a5b565b905082815260208101848484011115611c9757611c966119e5565b5b611ca2848285611aa7565b509392505050565b600082601f830112611cbf57611cbe6119e0565b5b8135611ccf848260208601611c68565b91505092915050565b60008060408385031215611cef57611cee61193d565b5b6000611cfd858286016119cb565b925050602083013567ffffffffffffffff811115611d1e57611d1d611942565b5b611d2a85828601611caa565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611d5f82611d34565b9050919050565b611d6f81611d54565b82525050565b611d7e81611947565b82525050565b6000604082019050611d996000830185611d66565b611da66020830184611d75565b9392505050565b60008115159050919050565b611dc281611dad565b8114611dcd57600080fd5b50565b600081519050611ddf81611db9565b92915050565b600060208284031215611dfb57611dfa61193d565b5b6000611e0984828501611dd0565b91505092915050565b6000602082019050611e276000830184611d75565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b611e65816119aa565b82525050565b6000602082019050611e806000830184611e5c565b92915050565b6000604082019050611e9b6000830185611e5c565b611ea86020830184611d66565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f1882611947565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611f4a57611f49611ede565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611f8f578082015181840152602081019050611f74565b83811115611f9e576000848401525b50505050565b6000611faf82611f55565b611fb98185611f60565b9350611fc9818560208601611f71565b611fd2816119ea565b840191505092915050565b6000608082019050611ff26000830187611e5c565b81810360208301526120048186611fa4565b90506120136040830185611d66565b6120206060830184611d66565b95945050505050565b600060608201905061203e6000830186611d66565b61204b6020830185611d66565b6120586040830184611d75565b949350505050565b60006020820190506120756000830184611d66565b92915050565b600081519050919050565b600082825260208201905092915050565b60006120a28261207b565b6120ac8185612086565b93506120bc818560208601611f71565b6120c5816119ea565b840191505092915050565b600060408201905081810360008301526120ea8185612097565b90506120f96020830184611e5c565b9392505050565b600061210b82611947565b915061211683611947565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561214b5761214a611ede565b5b828201905092915050565b600060208201905081810360008301526121708184612097565b905092915050565b600060408201905061218d6000830185611d75565b61219a6020830184611d75565b9392505050565b60006121ac82611947565b91506121b783611947565b9250828210156121ca576121c9611ede565b5b828203905092915050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000612216601c836121d5565b9150612221826121e0565b601c82019050919050565b6000819050919050565b612247612242826119aa565b61222c565b82525050565b600061225882612209565b91506122648284612236565b60208201915081905092915050565b61227c81611b2b565b82525050565b60006080820190506122976000830187611e5c565b6122a46020830186612273565b6122b16040830185611e5c565b6122be6060830184611e5c565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061230e57607f821691505b602082108103612321576123206122c7565b5b50919050565b600060608201905061233c6000830186611d75565b6123496020830185611d75565b6123566040830184611d75565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061239882611947565b91506123a383611947565b9250826123b3576123b261235e565b5b82820490509291505056fea2646970667358221220f8441485a5e7704d7b6ef29a236ccc926b2b682348dcf210d7e4bc89760736df64736f6c634300080d0033";

export class ArchaeologistFacet__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ArchaeologistFacet> {
    return super.deploy(overrides || {}) as Promise<ArchaeologistFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ArchaeologistFacet {
    return super.attach(address) as ArchaeologistFacet;
  }
  connect(signer: Signer): ArchaeologistFacet__factory {
    return super.connect(signer) as ArchaeologistFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArchaeologistFacetInterface {
    return new utils.Interface(_abi) as ArchaeologistFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArchaeologistFacet {
    return new Contract(address, _abi, signerOrProvider) as ArchaeologistFacet;
  }
}
