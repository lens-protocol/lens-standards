# Transaction 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/transaction/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/TransactionSchema.ts

```ts
type TransactionMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.TRANSACTION_LATEST;
  /**
   * The metadata details.
   */
  lens: TransactionMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

/**
 * A way to classify the type of transaction.
 */
enum MetadataTransactionType {
  ERC721 = "ERC721",
  ERC20 = "ERC20",
  OTHER = "OTHER",
}

type TransactionMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.TRANSACTION;
  /**
   * The transaction hash.
   */
  txHash: EncryptableString;
  /**
   * The type of transaction.
   */
  type: MetadataTransactionType;
  /**
   * The Chain Id.
   */
  chainId: ChainId;
  /**
   * Optional markdown content.
   */
  content?: EncryptableMarkdown;
  /**
   * The other attachments you want to include with it.
   */
  attachments?: AnyMedia[];
};
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/transaction/1.0.0/schema.json",
  "name": "My transaction",
  "description": "My transaction",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://transaction-link.com",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "content": "Just brought a cool NFT on ethereum",
    "locale": "en-US",
    "mainContentFocus": "TRANSACTION",
    "type": "ERC721",
    "txHash": "0x7c734de89205722a1254e4938b44ef8065b78524cdaf000f6b291dcbebd057d8",
    "chainId": 1,
    "tags": ["transaction"],
    "attachments": [
      {
        "type": "PNG",
        "item": "https://myimage.com",
        "altTag": "My Image",
        "license": "CCO"
      }
    ],
    "appId": "my-app-id"
  }
}
```
