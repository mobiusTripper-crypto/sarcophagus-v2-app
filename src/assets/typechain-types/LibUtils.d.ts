/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LibUtilsInterface extends ethers.utils.Interface {
  functions: {
    "assetIdsCheck(string,string)": FunctionFragment;
    "confirmAssetIdNotSet(string)": FunctionFragment;
    "hashCheck(bytes32,bytes)": FunctionFragment;
    "publicKeyLength(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "assetIdsCheck",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmAssetIdNotSet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "hashCheck",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "publicKeyLength",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "assetIdsCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmAssetIdNotSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hashCheck", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "publicKeyLength",
    data: BytesLike
  ): Result;

  events: {};
}

export class LibUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LibUtilsInterface;

  functions: {
    assetIdsCheck(
      existingAssetId: string,
      newAssetId: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    confirmAssetIdNotSet(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    hashCheck(
      doubleHash: BytesLike,
      singleHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    publicKeyLength(
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  assetIdsCheck(
    existingAssetId: string,
    newAssetId: string,
    overrides?: CallOverrides
  ): Promise<void>;

  confirmAssetIdNotSet(
    assetId: string,
    overrides?: CallOverrides
  ): Promise<void>;

  hashCheck(
    doubleHash: BytesLike,
    singleHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  publicKeyLength(
    publicKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    assetIdsCheck(
      existingAssetId: string,
      newAssetId: string,
      overrides?: CallOverrides
    ): Promise<void>;

    confirmAssetIdNotSet(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hashCheck(
      doubleHash: BytesLike,
      singleHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    publicKeyLength(
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    assetIdsCheck(
      existingAssetId: string,
      newAssetId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    confirmAssetIdNotSet(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashCheck(
      doubleHash: BytesLike,
      singleHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    publicKeyLength(
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assetIdsCheck(
      existingAssetId: string,
      newAssetId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    confirmAssetIdNotSet(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashCheck(
      doubleHash: BytesLike,
      singleHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    publicKeyLength(
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
