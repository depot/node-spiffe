// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "spiffe/workload/workload.proto" (syntax proto3)
// tslint:disable
import type {
  BinaryReadOptions,
  BinaryWriteOptions,
  IBinaryReader,
  IBinaryWriter,
  PartialMessage,
} from '@protobuf-ts/runtime'
import {MESSAGE_TYPE, MessageType, UnknownFieldHandler, WireType, reflectionMergePartial} from '@protobuf-ts/runtime'
import {ServiceType} from '@protobuf-ts/runtime-rpc'
import {Struct} from '../../google/protobuf/struct'
/**
 * The X509SVIDRequest message conveys parameters for requesting an X.509-SVID.
 * There are currently no request parameters.
 *
 * @generated from protobuf message X509SVIDRequest
 */
export interface X509SVIDRequest {}
/**
 * The X509SVIDResponse message carries X.509-SVIDs and related information,
 * including a set of global CRLs and a list of bundles the workload may use
 * for federating with foreign trust domains.
 *
 * @generated from protobuf message X509SVIDResponse
 */
export interface X509SVIDResponse {
  /**
   * Required. A list of X509SVID messages, each of which includes a single
   * X.509-SVID, its private key, and the bundle for the trust domain.
   *
   * @generated from protobuf field: repeated X509SVID svids = 1;
   */
  svids: X509SVID[]
  /**
   * Optional. ASN.1 DER encoded certificate revocation lists.
   *
   * @generated from protobuf field: repeated bytes crl = 2;
   */
  crl: Uint8Array[]
  /**
   * Optional. CA certificate bundles belonging to foreign trust domains that
   * the workload should trust, keyed by the SPIFFE ID of the foreign trust
   * domain. Bundles are ASN.1 DER encoded.
   *
   * @generated from protobuf field: map<string, bytes> federated_bundles = 3;
   */
  federatedBundles: {
    [key: string]: Uint8Array
  }
}
/**
 * The X509SVID message carries a single SVID and all associated information,
 * including the X.509 bundle for the trust domain.
 *
 * @generated from protobuf message X509SVID
 */
export interface X509SVID {
  /**
   * Required. The SPIFFE ID of the SVID in this entry
   *
   * @generated from protobuf field: string spiffe_id = 1;
   */
  spiffeId: string
  /**
   * Required. ASN.1 DER encoded certificate chain. MAY include
   * intermediates, the leaf certificate (or SVID itself) MUST come first.
   *
   * @generated from protobuf field: bytes x509_svid = 2;
   */
  x509Svid: Uint8Array
  /**
   * Required. ASN.1 DER encoded PKCS#8 private key. MUST be unencrypted.
   *
   * @generated from protobuf field: bytes x509_svid_key = 3;
   */
  x509SvidKey: Uint8Array
  /**
   * Required. ASN.1 DER encoded X.509 bundle for the trust domain.
   *
   * @generated from protobuf field: bytes bundle = 4;
   */
  bundle: Uint8Array
  /**
   * Optional. An operator-specified string used to provide guidance on how this
   * identity should be used by a workload when more than one SVID is returned.
   * For example, `internal` and `external` to indicate an SVID for internal or
   * external use, respectively.
   *
   * @generated from protobuf field: string hint = 5;
   */
  hint: string
}
/**
 * The X509BundlesRequest message conveys parameters for requesting X.509
 * bundles. There are currently no such parameters.
 *
 * @generated from protobuf message X509BundlesRequest
 */
export interface X509BundlesRequest {}
/**
 * The X509BundlesResponse message carries a set of global CRLs and a map of
 * trust bundles the workload should trust.
 *
 * @generated from protobuf message X509BundlesResponse
 */
export interface X509BundlesResponse {
  /**
   * Optional. ASN.1 DER encoded certificate revocation lists.
   *
   * @generated from protobuf field: repeated bytes crl = 1;
   */
  crl: Uint8Array[]
  /**
   * Required. CA certificate bundles belonging to trust domains that the
   * workload should trust, keyed by the SPIFFE ID of the trust domain.
   * Bundles are ASN.1 DER encoded.
   *
   * @generated from protobuf field: map<string, bytes> bundles = 2;
   */
  bundles: {
    [key: string]: Uint8Array
  }
}
/**
 * @generated from protobuf message JWTSVIDRequest
 */
export interface JWTSVIDRequest {
  /**
   * Required. The audience(s) the workload intends to authenticate against.
   *
   * @generated from protobuf field: repeated string audience = 1;
   */
  audience: string[]
  /**
   * Optional. The requested SPIFFE ID for the JWT-SVID. If unset, all
   * JWT-SVIDs to which the workload is entitled are requested.
   *
   * @generated from protobuf field: string spiffe_id = 2;
   */
  spiffeId: string
}
/**
 * The JWTSVIDResponse message conveys JWT-SVIDs.
 *
 * @generated from protobuf message JWTSVIDResponse
 */
export interface JWTSVIDResponse {
  /**
   * Required. The list of returned JWT-SVIDs.
   *
   * @generated from protobuf field: repeated JWTSVID svids = 1;
   */
  svids: JWTSVID[]
}
/**
 * The JWTSVID message carries the JWT-SVID token and associated metadata.
 *
 * @generated from protobuf message JWTSVID
 */
export interface JWTSVID {
  /**
   * Required. The SPIFFE ID of the JWT-SVID.
   *
   * @generated from protobuf field: string spiffe_id = 1;
   */
  spiffeId: string
  /**
   * Required. Encoded JWT using JWS Compact Serialization.
   *
   * @generated from protobuf field: string svid = 2;
   */
  svid: string
  /**
   * Optional. An operator-specified string used to provide guidance on how this
   * identity should be used by a workload when more than one SVID is returned.
   * For example, `internal` and `external` to indicate an SVID for internal or
   * external use, respectively.
   *
   * @generated from protobuf field: string hint = 3;
   */
  hint: string
}
/**
 * The JWTBundlesRequest message conveys parameters for requesting JWT bundles.
 * There are currently no such parameters.
 *
 * @generated from protobuf message JWTBundlesRequest
 */
export interface JWTBundlesRequest {}
/**
 * The JWTBundlesReponse conveys JWT bundles.
 *
 * @generated from protobuf message JWTBundlesResponse
 */
export interface JWTBundlesResponse {
  /**
   * Required. JWK encoded JWT bundles, keyed by the SPIFFE ID of the trust
   * domain.
   *
   * @generated from protobuf field: map<string, bytes> bundles = 1;
   */
  bundles: {
    [key: string]: Uint8Array
  }
}
/**
 * The ValidateJWTSVIDRequest message conveys request parameters for
 * JWT-SVID validation.
 *
 * @generated from protobuf message ValidateJWTSVIDRequest
 */
export interface ValidateJWTSVIDRequest {
  /**
   * Required. The audience of the validating party. The JWT-SVID must
   * contain an audience claim which contains this value in order to
   * succesfully validate.
   *
   * @generated from protobuf field: string audience = 1;
   */
  audience: string
  /**
   * Required. The JWT-SVID to validate, encoded using JWS Compact
   * Serialization.
   *
   * @generated from protobuf field: string svid = 2;
   */
  svid: string
}
/**
 * The ValidateJWTSVIDReponse message conveys the JWT-SVID validation results.
 *
 * @generated from protobuf message ValidateJWTSVIDResponse
 */
export interface ValidateJWTSVIDResponse {
  /**
   * Required. The SPIFFE ID of the validated JWT-SVID.
   *
   * @generated from protobuf field: string spiffe_id = 1;
   */
  spiffeId: string
  /**
   * Required. Claims contained within the payload of the validated JWT-SVID.
   * This includes both SPIFFE-required and non-required claims.
   *
   * @generated from protobuf field: google.protobuf.Struct claims = 2;
   */
  claims?: Struct
}
// @generated message type with reflection information, may provide speed optimized methods
class X509SVIDRequest$Type extends MessageType<X509SVIDRequest> {
  constructor() {
    super('X509SVIDRequest', [])
  }
  create(value?: PartialMessage<X509SVIDRequest>): X509SVIDRequest {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<X509SVIDRequest>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: X509SVIDRequest,
  ): X509SVIDRequest {
    return target ?? this.create()
  }
  internalBinaryWrite(message: X509SVIDRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message X509SVIDRequest
 */
export const X509SVIDRequest = new X509SVIDRequest$Type()
// @generated message type with reflection information, may provide speed optimized methods
class X509SVIDResponse$Type extends MessageType<X509SVIDResponse> {
  constructor() {
    super('X509SVIDResponse', [
      {no: 1, name: 'svids', kind: 'message', repeat: 1 /*RepeatType.PACKED*/, T: () => X509SVID},
      {no: 2, name: 'crl', kind: 'scalar', repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/},
      {
        no: 3,
        name: 'federated_bundles',
        kind: 'map',
        K: 9 /*ScalarType.STRING*/,
        V: {kind: 'scalar', T: 12 /*ScalarType.BYTES*/},
      },
    ])
  }
  create(value?: PartialMessage<X509SVIDResponse>): X509SVIDResponse {
    const message = {svids: [], crl: [], federatedBundles: {}}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<X509SVIDResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: X509SVIDResponse,
  ): X509SVIDResponse {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* repeated X509SVID svids */ 1:
          message.svids.push(X509SVID.internalBinaryRead(reader, reader.uint32(), options))
          break
        case /* repeated bytes crl */ 2:
          message.crl.push(reader.bytes())
          break
        case /* map<string, bytes> federated_bundles */ 3:
          this.binaryReadMap3(message.federatedBundles, reader, options)
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`)
          let d = reader.skip(wireType)
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d)
      }
    }
    return message
  }
  private binaryReadMap3(
    map: X509SVIDResponse['federatedBundles'],
    reader: IBinaryReader,
    options: BinaryReadOptions,
  ): void {
    let len = reader.uint32(),
      end = reader.pos + len,
      key: keyof X509SVIDResponse['federatedBundles'] | undefined,
      val: X509SVIDResponse['federatedBundles'][any] | undefined
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case 1:
          key = reader.string()
          break
        case 2:
          val = reader.bytes()
          break
        default:
          throw new globalThis.Error('unknown map entry field for field X509SVIDResponse.federated_bundles')
      }
    }
    map[key ?? ''] = val ?? new Uint8Array(0)
  }
  internalBinaryWrite(message: X509SVIDResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* repeated X509SVID svids = 1; */
    for (let i = 0; i < message.svids.length; i++)
      X509SVID.internalBinaryWrite(message.svids[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join()
    /* repeated bytes crl = 2; */
    for (let i = 0; i < message.crl.length; i++) writer.tag(2, WireType.LengthDelimited).bytes(message.crl[i])
    /* map<string, bytes> federated_bundles = 3; */
    for (let k of Object.keys(message.federatedBundles))
      writer
        .tag(3, WireType.LengthDelimited)
        .fork()
        .tag(1, WireType.LengthDelimited)
        .string(k)
        .tag(2, WireType.LengthDelimited)
        .bytes(message.federatedBundles[k])
        .join()
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message X509SVIDResponse
 */
export const X509SVIDResponse = new X509SVIDResponse$Type()
// @generated message type with reflection information, may provide speed optimized methods
class X509SVID$Type extends MessageType<X509SVID> {
  constructor() {
    super('X509SVID', [
      {no: 1, name: 'spiffe_id', kind: 'scalar', T: 9 /*ScalarType.STRING*/},
      {no: 2, name: 'x509_svid', kind: 'scalar', T: 12 /*ScalarType.BYTES*/},
      {no: 3, name: 'x509_svid_key', kind: 'scalar', T: 12 /*ScalarType.BYTES*/},
      {no: 4, name: 'bundle', kind: 'scalar', T: 12 /*ScalarType.BYTES*/},
      {no: 5, name: 'hint', kind: 'scalar', T: 9 /*ScalarType.STRING*/},
    ])
  }
  create(value?: PartialMessage<X509SVID>): X509SVID {
    const message = {
      spiffeId: '',
      x509Svid: new Uint8Array(0),
      x509SvidKey: new Uint8Array(0),
      bundle: new Uint8Array(0),
      hint: '',
    }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<X509SVID>(this, message, value)
    return message
  }
  internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: X509SVID): X509SVID {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string spiffe_id */ 1:
          message.spiffeId = reader.string()
          break
        case /* bytes x509_svid */ 2:
          message.x509Svid = reader.bytes()
          break
        case /* bytes x509_svid_key */ 3:
          message.x509SvidKey = reader.bytes()
          break
        case /* bytes bundle */ 4:
          message.bundle = reader.bytes()
          break
        case /* string hint */ 5:
          message.hint = reader.string()
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`)
          let d = reader.skip(wireType)
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d)
      }
    }
    return message
  }
  internalBinaryWrite(message: X509SVID, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* string spiffe_id = 1; */
    if (message.spiffeId !== '') writer.tag(1, WireType.LengthDelimited).string(message.spiffeId)
    /* bytes x509_svid = 2; */
    if (message.x509Svid.length) writer.tag(2, WireType.LengthDelimited).bytes(message.x509Svid)
    /* bytes x509_svid_key = 3; */
    if (message.x509SvidKey.length) writer.tag(3, WireType.LengthDelimited).bytes(message.x509SvidKey)
    /* bytes bundle = 4; */
    if (message.bundle.length) writer.tag(4, WireType.LengthDelimited).bytes(message.bundle)
    /* string hint = 5; */
    if (message.hint !== '') writer.tag(5, WireType.LengthDelimited).string(message.hint)
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message X509SVID
 */
export const X509SVID = new X509SVID$Type()
// @generated message type with reflection information, may provide speed optimized methods
class X509BundlesRequest$Type extends MessageType<X509BundlesRequest> {
  constructor() {
    super('X509BundlesRequest', [])
  }
  create(value?: PartialMessage<X509BundlesRequest>): X509BundlesRequest {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<X509BundlesRequest>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: X509BundlesRequest,
  ): X509BundlesRequest {
    return target ?? this.create()
  }
  internalBinaryWrite(message: X509BundlesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message X509BundlesRequest
 */
export const X509BundlesRequest = new X509BundlesRequest$Type()
// @generated message type with reflection information, may provide speed optimized methods
class X509BundlesResponse$Type extends MessageType<X509BundlesResponse> {
  constructor() {
    super('X509BundlesResponse', [
      {no: 1, name: 'crl', kind: 'scalar', repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/},
      {
        no: 2,
        name: 'bundles',
        kind: 'map',
        K: 9 /*ScalarType.STRING*/,
        V: {kind: 'scalar', T: 12 /*ScalarType.BYTES*/},
      },
    ])
  }
  create(value?: PartialMessage<X509BundlesResponse>): X509BundlesResponse {
    const message = {crl: [], bundles: {}}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<X509BundlesResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: X509BundlesResponse,
  ): X509BundlesResponse {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* repeated bytes crl */ 1:
          message.crl.push(reader.bytes())
          break
        case /* map<string, bytes> bundles */ 2:
          this.binaryReadMap2(message.bundles, reader, options)
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`)
          let d = reader.skip(wireType)
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d)
      }
    }
    return message
  }
  private binaryReadMap2(map: X509BundlesResponse['bundles'], reader: IBinaryReader, options: BinaryReadOptions): void {
    let len = reader.uint32(),
      end = reader.pos + len,
      key: keyof X509BundlesResponse['bundles'] | undefined,
      val: X509BundlesResponse['bundles'][any] | undefined
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case 1:
          key = reader.string()
          break
        case 2:
          val = reader.bytes()
          break
        default:
          throw new globalThis.Error('unknown map entry field for field X509BundlesResponse.bundles')
      }
    }
    map[key ?? ''] = val ?? new Uint8Array(0)
  }
  internalBinaryWrite(message: X509BundlesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* repeated bytes crl = 1; */
    for (let i = 0; i < message.crl.length; i++) writer.tag(1, WireType.LengthDelimited).bytes(message.crl[i])
    /* map<string, bytes> bundles = 2; */
    for (let k of Object.keys(message.bundles))
      writer
        .tag(2, WireType.LengthDelimited)
        .fork()
        .tag(1, WireType.LengthDelimited)
        .string(k)
        .tag(2, WireType.LengthDelimited)
        .bytes(message.bundles[k])
        .join()
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message X509BundlesResponse
 */
export const X509BundlesResponse = new X509BundlesResponse$Type()
// @generated message type with reflection information, may provide speed optimized methods
class JWTSVIDRequest$Type extends MessageType<JWTSVIDRequest> {
  constructor() {
    super('JWTSVIDRequest', [
      {no: 1, name: 'audience', kind: 'scalar', repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/},
      {no: 2, name: 'spiffe_id', kind: 'scalar', T: 9 /*ScalarType.STRING*/},
    ])
  }
  create(value?: PartialMessage<JWTSVIDRequest>): JWTSVIDRequest {
    const message = {audience: [], spiffeId: ''}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<JWTSVIDRequest>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: JWTSVIDRequest,
  ): JWTSVIDRequest {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* repeated string audience */ 1:
          message.audience.push(reader.string())
          break
        case /* string spiffe_id */ 2:
          message.spiffeId = reader.string()
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`)
          let d = reader.skip(wireType)
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d)
      }
    }
    return message
  }
  internalBinaryWrite(message: JWTSVIDRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* repeated string audience = 1; */
    for (let i = 0; i < message.audience.length; i++)
      writer.tag(1, WireType.LengthDelimited).string(message.audience[i])
    /* string spiffe_id = 2; */
    if (message.spiffeId !== '') writer.tag(2, WireType.LengthDelimited).string(message.spiffeId)
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message JWTSVIDRequest
 */
export const JWTSVIDRequest = new JWTSVIDRequest$Type()
// @generated message type with reflection information, may provide speed optimized methods
class JWTSVIDResponse$Type extends MessageType<JWTSVIDResponse> {
  constructor() {
    super('JWTSVIDResponse', [
      {no: 1, name: 'svids', kind: 'message', repeat: 1 /*RepeatType.PACKED*/, T: () => JWTSVID},
    ])
  }
  create(value?: PartialMessage<JWTSVIDResponse>): JWTSVIDResponse {
    const message = {svids: []}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<JWTSVIDResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: JWTSVIDResponse,
  ): JWTSVIDResponse {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* repeated JWTSVID svids */ 1:
          message.svids.push(JWTSVID.internalBinaryRead(reader, reader.uint32(), options))
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`)
          let d = reader.skip(wireType)
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d)
      }
    }
    return message
  }
  internalBinaryWrite(message: JWTSVIDResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* repeated JWTSVID svids = 1; */
    for (let i = 0; i < message.svids.length; i++)
      JWTSVID.internalBinaryWrite(message.svids[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join()
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message JWTSVIDResponse
 */
export const JWTSVIDResponse = new JWTSVIDResponse$Type()
// @generated message type with reflection information, may provide speed optimized methods
class JWTSVID$Type extends MessageType<JWTSVID> {
  constructor() {
    super('JWTSVID', [
      {no: 1, name: 'spiffe_id', kind: 'scalar', T: 9 /*ScalarType.STRING*/},
      {no: 2, name: 'svid', kind: 'scalar', T: 9 /*ScalarType.STRING*/},
      {no: 3, name: 'hint', kind: 'scalar', T: 9 /*ScalarType.STRING*/},
    ])
  }
  create(value?: PartialMessage<JWTSVID>): JWTSVID {
    const message = {spiffeId: '', svid: '', hint: ''}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<JWTSVID>(this, message, value)
    return message
  }
  internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JWTSVID): JWTSVID {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string spiffe_id */ 1:
          message.spiffeId = reader.string()
          break
        case /* string svid */ 2:
          message.svid = reader.string()
          break
        case /* string hint */ 3:
          message.hint = reader.string()
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`)
          let d = reader.skip(wireType)
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d)
      }
    }
    return message
  }
  internalBinaryWrite(message: JWTSVID, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* string spiffe_id = 1; */
    if (message.spiffeId !== '') writer.tag(1, WireType.LengthDelimited).string(message.spiffeId)
    /* string svid = 2; */
    if (message.svid !== '') writer.tag(2, WireType.LengthDelimited).string(message.svid)
    /* string hint = 3; */
    if (message.hint !== '') writer.tag(3, WireType.LengthDelimited).string(message.hint)
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message JWTSVID
 */
export const JWTSVID = new JWTSVID$Type()
// @generated message type with reflection information, may provide speed optimized methods
class JWTBundlesRequest$Type extends MessageType<JWTBundlesRequest> {
  constructor() {
    super('JWTBundlesRequest', [])
  }
  create(value?: PartialMessage<JWTBundlesRequest>): JWTBundlesRequest {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<JWTBundlesRequest>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: JWTBundlesRequest,
  ): JWTBundlesRequest {
    return target ?? this.create()
  }
  internalBinaryWrite(message: JWTBundlesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message JWTBundlesRequest
 */
export const JWTBundlesRequest = new JWTBundlesRequest$Type()
// @generated message type with reflection information, may provide speed optimized methods
class JWTBundlesResponse$Type extends MessageType<JWTBundlesResponse> {
  constructor() {
    super('JWTBundlesResponse', [
      {
        no: 1,
        name: 'bundles',
        kind: 'map',
        K: 9 /*ScalarType.STRING*/,
        V: {kind: 'scalar', T: 12 /*ScalarType.BYTES*/},
      },
    ])
  }
  create(value?: PartialMessage<JWTBundlesResponse>): JWTBundlesResponse {
    const message = {bundles: {}}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<JWTBundlesResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: JWTBundlesResponse,
  ): JWTBundlesResponse {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* map<string, bytes> bundles */ 1:
          this.binaryReadMap1(message.bundles, reader, options)
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`)
          let d = reader.skip(wireType)
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d)
      }
    }
    return message
  }
  private binaryReadMap1(map: JWTBundlesResponse['bundles'], reader: IBinaryReader, options: BinaryReadOptions): void {
    let len = reader.uint32(),
      end = reader.pos + len,
      key: keyof JWTBundlesResponse['bundles'] | undefined,
      val: JWTBundlesResponse['bundles'][any] | undefined
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case 1:
          key = reader.string()
          break
        case 2:
          val = reader.bytes()
          break
        default:
          throw new globalThis.Error('unknown map entry field for field JWTBundlesResponse.bundles')
      }
    }
    map[key ?? ''] = val ?? new Uint8Array(0)
  }
  internalBinaryWrite(message: JWTBundlesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* map<string, bytes> bundles = 1; */
    for (let k of Object.keys(message.bundles))
      writer
        .tag(1, WireType.LengthDelimited)
        .fork()
        .tag(1, WireType.LengthDelimited)
        .string(k)
        .tag(2, WireType.LengthDelimited)
        .bytes(message.bundles[k])
        .join()
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message JWTBundlesResponse
 */
export const JWTBundlesResponse = new JWTBundlesResponse$Type()
// @generated message type with reflection information, may provide speed optimized methods
class ValidateJWTSVIDRequest$Type extends MessageType<ValidateJWTSVIDRequest> {
  constructor() {
    super('ValidateJWTSVIDRequest', [
      {no: 1, name: 'audience', kind: 'scalar', T: 9 /*ScalarType.STRING*/},
      {no: 2, name: 'svid', kind: 'scalar', T: 9 /*ScalarType.STRING*/},
    ])
  }
  create(value?: PartialMessage<ValidateJWTSVIDRequest>): ValidateJWTSVIDRequest {
    const message = {audience: '', svid: ''}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<ValidateJWTSVIDRequest>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ValidateJWTSVIDRequest,
  ): ValidateJWTSVIDRequest {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string audience */ 1:
          message.audience = reader.string()
          break
        case /* string svid */ 2:
          message.svid = reader.string()
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`)
          let d = reader.skip(wireType)
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d)
      }
    }
    return message
  }
  internalBinaryWrite(
    message: ValidateJWTSVIDRequest,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string audience = 1; */
    if (message.audience !== '') writer.tag(1, WireType.LengthDelimited).string(message.audience)
    /* string svid = 2; */
    if (message.svid !== '') writer.tag(2, WireType.LengthDelimited).string(message.svid)
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message ValidateJWTSVIDRequest
 */
export const ValidateJWTSVIDRequest = new ValidateJWTSVIDRequest$Type()
// @generated message type with reflection information, may provide speed optimized methods
class ValidateJWTSVIDResponse$Type extends MessageType<ValidateJWTSVIDResponse> {
  constructor() {
    super('ValidateJWTSVIDResponse', [
      {no: 1, name: 'spiffe_id', kind: 'scalar', T: 9 /*ScalarType.STRING*/},
      {no: 2, name: 'claims', kind: 'message', T: () => Struct},
    ])
  }
  create(value?: PartialMessage<ValidateJWTSVIDResponse>): ValidateJWTSVIDResponse {
    const message = {spiffeId: ''}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {enumerable: false, value: this})
    if (value !== undefined) reflectionMergePartial<ValidateJWTSVIDResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ValidateJWTSVIDResponse,
  ): ValidateJWTSVIDResponse {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string spiffe_id */ 1:
          message.spiffeId = reader.string()
          break
        case /* google.protobuf.Struct claims */ 2:
          message.claims = Struct.internalBinaryRead(reader, reader.uint32(), options, message.claims)
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`)
          let d = reader.skip(wireType)
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d)
      }
    }
    return message
  }
  internalBinaryWrite(
    message: ValidateJWTSVIDResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string spiffe_id = 1; */
    if (message.spiffeId !== '') writer.tag(1, WireType.LengthDelimited).string(message.spiffeId)
    /* google.protobuf.Struct claims = 2; */
    if (message.claims)
      Struct.internalBinaryWrite(message.claims, writer.tag(2, WireType.LengthDelimited).fork(), options).join()
    let u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message ValidateJWTSVIDResponse
 */
export const ValidateJWTSVIDResponse = new ValidateJWTSVIDResponse$Type()
/**
 * @generated ServiceType for protobuf service SpiffeWorkloadAPI
 */
export const SpiffeWorkloadAPI = new ServiceType('SpiffeWorkloadAPI', [
  {name: 'FetchX509SVID', serverStreaming: true, options: {}, I: X509SVIDRequest, O: X509SVIDResponse},
  {name: 'FetchX509Bundles', serverStreaming: true, options: {}, I: X509BundlesRequest, O: X509BundlesResponse},
  {name: 'FetchJWTSVID', options: {}, I: JWTSVIDRequest, O: JWTSVIDResponse},
  {name: 'FetchJWTBundles', serverStreaming: true, options: {}, I: JWTBundlesRequest, O: JWTBundlesResponse},
  {name: 'ValidateJWTSVID', options: {}, I: ValidateJWTSVIDRequest, O: ValidateJWTSVIDResponse},
])