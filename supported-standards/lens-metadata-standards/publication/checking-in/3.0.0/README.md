# Checking in 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/checking-in/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/CheckingInSchema.ts

```ts
type CheckingInMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.CHECKING_IN_LATEST;
  /**
   * The metadata details.
   */
  lens: CheckingInMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type CheckingInMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.CHECKING_IN;
  /**
   * Where you checking in from (free form text).
   */
  location: EncryptableString;
  /**
   * The optional geographic position of the location.
   */
  position?: EncryptableGeoURI;
  /**
   * The optional address of the location.
   */
  address?: PhysicalAddress;
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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/checking-in/1.0.0/schema.json",
  "name": "Me checking in",
  "description": "Me checking in",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://checking-in-link.com",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "location": "AAVE office",
    "content": "Just got into the office",
    "locale": "en-US",
    "mainContentFocus": "CHECKING_IN",
    "tags": ["checking-in"],
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
