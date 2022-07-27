/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibEvents, LibEventsInterface } from "../LibEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
    ],
    name: "BurySarcophagus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
    ],
    name: "CancelSarcophagus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cleaner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cleanerBondReward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "embalmerBondReward",
        type: "uint256",
      },
    ],
    name: "CleanUpSarcophagus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sarcophagusContract",
        type: "address",
      },
    ],
    name: "Creation",
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
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "arweaveTxId",
        type: "string",
      },
    ],
    name: "FinalizeSarcophagus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "identifier",
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
        name: "identifier",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "canBeTransferred",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "resurrectionTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "embalmer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipientAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "arweaveArchaeologist",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "archaeologists",
        type: "address[]",
      },
    ],
    name: "InitializeSarcophagus",
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
        internalType: "bytes",
        name: "currentPublicKey",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "string",
        name: "endpoint",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "paymentAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feePerByte",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minimumBounty",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minimumDiggingFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maximumResurrectionTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bond",
        type: "uint256",
      },
    ],
    name: "RegisterArchaeologist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "resurrectionTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "resurrectionWindow",
        type: "uint256",
      },
    ],
    name: "RewrapSarcophagus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
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
        internalType: "string",
        name: "endpoint",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "paymentAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feePerByte",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minimumBounty",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minimumDiggingFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maximumResurrectionTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "addedBond",
        type: "uint256",
      },
    ],
    name: "UpdateArchaeologist",
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
        internalType: "bytes",
        name: "currentPublicKey",
        type: "bytes",
      },
    ],
    name: "UpdateArchaeologistPublicKey",
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
];

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208fa8f3aee83d74b3bf2261a2d4ffe4d96ec0441246a3bde21eda67e7f7bf717364736f6c634300080d0033";

export class LibEvents__factory extends ContractFactory {
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
  ): Promise<LibEvents> {
    return super.deploy(overrides || {}) as Promise<LibEvents>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibEvents {
    return super.attach(address) as LibEvents;
  }
  connect(signer: Signer): LibEvents__factory {
    return super.connect(signer) as LibEvents__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibEventsInterface {
    return new utils.Interface(_abi) as LibEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibEvents {
    return new Contract(address, _abi, signerOrProvider) as LibEvents;
  }
}
