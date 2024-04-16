# Mint 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/mint/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/MintSchema.ts

```ts
type MintMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.MINT_LATEST;
  /**
   * The metadata details.
   */
  lens: MintMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type MintMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.MINT;
  /**
   * The mint item it can be a URL of the known provider like opensea
   * https://opensea.io/assets/ethereum/0xfaa2471e93bd1cee3b0ab381c242ada8e1d1a759/299
   * or https://zora.co/collect/0x9d90669665607f08005cae4a7098143f554c59ef/39626.
   *
   * The Lens API has an allow list of providers and if the domain does not match it will mark it as failed metadata
   */
  mintLink: EncryptableURI;
  /**
   * Optional markdown content.
   */
  content?: EncryptableMarkdown;
  /**
   * Any attachment you want to include with it.
   */
  attachments?: AnyMedia[];
};
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/mint/1.0.0/schema.json",
  "name": "My mint",
  "description": "My mint",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://mint-link.com",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "content": "Stand with crypto",
    "mintLink": "https://zora.co/collect/0x9d90669665607f08005cae4a7098143f554c59ef/39626",
    "locale": "en-US",
    "mainContentFocus": "MINT",
    "tags": ["mint"],
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
