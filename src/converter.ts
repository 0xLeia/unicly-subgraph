import { BigInt } from "@graphprotocol/graph-ts"
import {
    Converter,
    Approval,
    Transfer,
    Deposited,
    Refunded,
    Issued,
    BidCreated,
    BidRemoved,
    ClaimedNFT
} from "../generated/Converter/Converter"
import {TokenEntity, BidEntity, UnBidEntity} from "../generated/schema"

export function handleApproval(event: Approval): void {

    // Note: If a handler doesn't require existing field values, it is faster
    // _not_ to load the entity from the store. Instead, create it fresh with
    // `new Entity(...)`, set the fields that should be updated and save the
    // entity back to the store. Fields that were not set or unset remain
    // unchanged, allowing for partial updates to be applied.

    // It is also possible to access smart contracts from mappings. For
    // example, the contract that has emitted the event can be connected to
    // with:
    //
    // let contract = Contract.bind(event.address)
    //
    // The following functions can then be called on this contract to access
    // state variables and other data:
    //
    // - contract._description(...)
    // - contract._threshold(...)
    // - contract.active(...)
    // - contract.allowance(...)
    // - contract.approve(...)
    // - contract.balanceOf(...)
    // - contract.bidNFTs(...)
    // - contract.cap(...)
    // - contract.currentNFTIndex(...)
    // - contract.decimals(...)
    // - contract.decreaseAllowance(...)
    // - contract.factory(...)
    // - contract.increaseAllowance(...)
    // - contract.issuer(...)
    // - contract.name(...)
    // - contract.nfts(...)
    // - contract.numberBids(...)
    // - contract.onERC1155BatchReceived(...)
    // - contract.onERC1155Received(...)
    // - contract.owner(...)
    // - contract.supportsInterface(...)
    // - contract.symbol(...)
    // - contract.totalBidAmount(...)
    // - contract.totalSupply(...)
    // - contract.transfer(...)
    // - contract.transferFrom(...)
}

export function handleTransfer(event: Transfer): void {}
export function handleDeposited(event: Deposited): void {}
export function handleRefunded(event: Refunded): void {}
export function handleIssued(event: Issued): void {}
export function handleBidCreated(event: BidCreated): void {
    let converter = TokenEntity.load(event.address.toHex());

    if (converter){
        let entity = new BidEntity(event.transaction.hash.toHex());
        entity.bidAmount = event.params.bidAmount;
        entity.nftIndex = event.params.nftIndex;
        entity.bidder = event.transaction.from;
        entity.token = event.address.toHex();
        entity.timestamp = event.block.timestamp;
        entity.save();
    }
}
export function handleBidRemoved(event: BidRemoved): void {
    let converter = TokenEntity.load(event.address.toHex());

    if (converter) {
        let entity = new UnBidEntity(event.transaction.hash.toHex());
        entity.nftIndex = event.params.nftIndex;
        entity.bidder = event.transaction.from;
        entity.token = event.address.toHex();
        entity.timestamp = event.block.timestamp;
        entity.save();
    }
}
export function handleClaimedNFT(event: ClaimedNFT): void {}
