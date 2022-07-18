/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Diamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Diamond__factory>;
    getContractFactory(
      name: "DiamondCutFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamondCutFacet__factory>;
    getContractFactory(
      name: "DiamondLoupeFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamondLoupeFacet__factory>;
    getContractFactory(
      name: "OwnershipFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnershipFacet__factory>;
    getContractFactory(
      name: "IDiamondCut",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamondCut__factory>;
    getContractFactory(
      name: "IDiamondLoupe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamondLoupe__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC173",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC173__factory>;
    getContractFactory(
      name: "LibDiamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibDiamond__factory>;
    getContractFactory(
      name: "DiamondInit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamondInit__factory>;
    getContractFactory(
      name: "AdminFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AdminFacet__factory>;
    getContractFactory(
      name: "ArchaeologistFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArchaeologistFacet__factory>;
    getContractFactory(
      name: "EmbalmerFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EmbalmerFacet__factory>;
    getContractFactory(
      name: "ThirdPartyFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ThirdPartyFacet__factory>;
    getContractFactory(
      name: "ViewStateFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ViewStateFacet__factory>;
    getContractFactory(
      name: "LibErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibErrors__factory>;
    getContractFactory(
      name: "LibEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibEvents__factory>;
    getContractFactory(
      name: "LibUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibUtils__factory>;
    getContractFactory(
      name: "SarcoTokenMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SarcoTokenMock__factory>;
    getContractFactory(
      name: "AppStorageInit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AppStorageInit__factory>;

    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Diamond",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Diamond>;
    getContractAt(
      name: "DiamondCutFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DiamondCutFacet>;
    getContractAt(
      name: "DiamondLoupeFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DiamondLoupeFacet>;
    getContractAt(
      name: "OwnershipFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnershipFacet>;
    getContractAt(
      name: "IDiamondCut",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamondCut>;
    getContractAt(
      name: "IDiamondLoupe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamondLoupe>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IERC173",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC173>;
    getContractAt(
      name: "LibDiamond",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibDiamond>;
    getContractAt(
      name: "DiamondInit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DiamondInit>;
    getContractAt(
      name: "AdminFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AdminFacet>;
    getContractAt(
      name: "ArchaeologistFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArchaeologistFacet>;
    getContractAt(
      name: "EmbalmerFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EmbalmerFacet>;
    getContractAt(
      name: "ThirdPartyFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ThirdPartyFacet>;
    getContractAt(
      name: "ViewStateFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ViewStateFacet>;
    getContractAt(
      name: "LibErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibErrors>;
    getContractAt(
      name: "LibEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibEvents>;
    getContractAt(
      name: "LibUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibUtils>;
    getContractAt(
      name: "SarcoTokenMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SarcoTokenMock>;
    getContractAt(
      name: "AppStorageInit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AppStorageInit>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
