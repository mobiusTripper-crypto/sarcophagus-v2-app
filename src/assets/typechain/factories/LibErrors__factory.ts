/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibErrors, LibErrorsInterface } from "../LibErrors";

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
        internalType: "address[]",
        name: "archaeologists",
        type: "address[]",
      },
    ],
    name: "ArchaeologistListNotUnique",
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
    inputs: [],
    name: "ArweaveArchaeologistNotInList",
    type: "error",
  },
  {
    inputs: [],
    name: "ArweaveTxIdEmpty",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "signaturesLength",
        type: "uint256",
      },
    ],
    name: "IncorrectNumberOfArchaeologistSignatures",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxResurrectionIntervalIsZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "minShards",
        type: "uint8",
      },
    ],
    name: "MinShardsGreaterThanArchaeologists",
    type: "error",
  },
  {
    inputs: [],
    name: "MinShardsZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newResurrectionTime",
        type: "uint256",
      },
    ],
    name: "NewResurrectionTimeInPast",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newResurrectionTime",
        type: "uint256",
      },
    ],
    name: "NewResurrectionTimeTooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "NoArchaeologistsProvided",
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
    inputs: [],
    name: "NotEnoughProof",
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
    name: "SarcophagusAlreadyExists",
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
    name: "SarcophagusAlreadyFinalized",
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
    inputs: [],
    name: "SarcophagusIsUnwrappable",
    type: "error",
  },
  {
    inputs: [],
    name: "SarcophagusNotCleanable",
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
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "embalmer",
        type: "address",
      },
    ],
    name: "SenderNotEmbalmer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hopefulAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "actualAddress",
        type: "address",
      },
    ],
    name: "SignatureFromWrongAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureListNotUnique",
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
];

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122066a45041d31b8ed63bb7457a93bdfeef8b035455931246d354aa949ab36662e464736f6c634300080d0033";

export class LibErrors__factory extends ContractFactory {
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
  ): Promise<LibErrors> {
    return super.deploy(overrides || {}) as Promise<LibErrors>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibErrors {
    return super.attach(address) as LibErrors;
  }
  connect(signer: Signer): LibErrors__factory {
    return super.connect(signer) as LibErrors__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibErrorsInterface {
    return new utils.Interface(_abi) as LibErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibErrors {
    return new Contract(address, _abi, signerOrProvider) as LibErrors;
  }
}
