import {BigInt} from "@graphprotocol/graph-ts"
import {UnicFactory, TokenCreated} from "../generated/UnicFactory/UnicFactory"
import {
    Converter,
    Approval,
    Transfer } from "../generated/Converter/Converter"
import {TokenEntity} from "../generated/schema"

export function handleTokenCreated(event: TokenCreated): void {
    // Entities can be loaded from the store using a string ID; this ID
    // needs to be unique across all entities of the same type
    let entity = new TokenEntity(event.params.uToken.toHex())

    // Entity fields can be set based on event parameters
    entity.owner = event.params.caller
    // entity.uToken = event.params.uToken

    // get the created token details
    let converter = Converter.bind(event.params.uToken)

    entity.symbol = converter.symbol()
    entity.decimals = converter.decimals()
    entity.name = converter.name()
    entity.maxSupply = converter.cap()

    // Entities can be written to the store with `.save()`
    entity.save()

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
    // - contract.createUToken(...)
    // - contract.fee(...)
    // - contract.feeTo(...)
    // - contract.feeToSetter(...)
    // - contract.uTokens(...)
    // - contract.uTokensLength(...)
}
