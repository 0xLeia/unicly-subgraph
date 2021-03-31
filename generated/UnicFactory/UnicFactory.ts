// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TokenCreated extends ethereum.Event {
  get params(): TokenCreated__Params {
    return new TokenCreated__Params(this);
  }
}

export class TokenCreated__Params {
  _event: TokenCreated;

  constructor(event: TokenCreated) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get uToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UnicFactory extends ethereum.SmartContract {
  static bind(address: Address): UnicFactory {
    return new UnicFactory("UnicFactory", address);
  }

  createUToken(
    totalSupply: BigInt,
    decimals: i32,
    name: string,
    symbol: string,
    percentage: i32
  ): Address {
    let result = super.call(
      "createUToken",
      "createUToken(uint256,uint8,string,string,uint16):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(totalSupply),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(decimals)),
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(percentage))
      ]
    );

    return result[0].toAddress();
  }

  try_createUToken(
    totalSupply: BigInt,
    decimals: i32,
    name: string,
    symbol: string,
    percentage: i32
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createUToken",
      "createUToken(uint256,uint8,string,string,uint16):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(totalSupply),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(decimals)),
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(percentage))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  fee(): i32 {
    let result = super.call("fee", "fee():(uint16)", []);

    return result[0].toI32();
  }

  try_fee(): ethereum.CallResult<i32> {
    let result = super.tryCall("fee", "fee():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  feeTo(): Address {
    let result = super.call("feeTo", "feeTo():(address)", []);

    return result[0].toAddress();
  }

  try_feeTo(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeTo", "feeTo():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeToSetter(): Address {
    let result = super.call("feeToSetter", "feeToSetter():(address)", []);

    return result[0].toAddress();
  }

  try_feeToSetter(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeToSetter", "feeToSetter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  uTokens(param0: BigInt): Address {
    let result = super.call("uTokens", "uTokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_uTokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("uTokens", "uTokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  uTokensLength(): BigInt {
    let result = super.call("uTokensLength", "uTokensLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_uTokensLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "uTokensLength",
      "uTokensLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _feeToSetter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _fee(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateUTokenCall extends ethereum.Call {
  get inputs(): CreateUTokenCall__Inputs {
    return new CreateUTokenCall__Inputs(this);
  }

  get outputs(): CreateUTokenCall__Outputs {
    return new CreateUTokenCall__Outputs(this);
  }
}

export class CreateUTokenCall__Inputs {
  _call: CreateUTokenCall;

  constructor(call: CreateUTokenCall) {
    this._call = call;
  }

  get totalSupply(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get decimals(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get name(): string {
    return this._call.inputValues[2].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[3].value.toString();
  }

  get percentage(): i32 {
    return this._call.inputValues[4].value.toI32();
  }
}

export class CreateUTokenCall__Outputs {
  _call: CreateUTokenCall;

  constructor(call: CreateUTokenCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get _fee(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }
}

export class SetFeeToCall extends ethereum.Call {
  get inputs(): SetFeeToCall__Inputs {
    return new SetFeeToCall__Inputs(this);
  }

  get outputs(): SetFeeToCall__Outputs {
    return new SetFeeToCall__Outputs(this);
  }
}

export class SetFeeToCall__Inputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }

  get _feeTo(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeToCall__Outputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }
}

export class SetFeeToSetterCall extends ethereum.Call {
  get inputs(): SetFeeToSetterCall__Inputs {
    return new SetFeeToSetterCall__Inputs(this);
  }

  get outputs(): SetFeeToSetterCall__Outputs {
    return new SetFeeToSetterCall__Outputs(this);
  }
}

export class SetFeeToSetterCall__Inputs {
  _call: SetFeeToSetterCall;

  constructor(call: SetFeeToSetterCall) {
    this._call = call;
  }

  get _feeToSetter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeToSetterCall__Outputs {
  _call: SetFeeToSetterCall;

  constructor(call: SetFeeToSetterCall) {
    this._call = call;
  }
}