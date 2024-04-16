# TextOnly 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/text-only/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/TextOnlySchema.ts

```ts
type TextOnlyMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.TEXT_ONLY_LATEST;
  /**
   * The metadata details.
   */
  lens: TextOnlyMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type TextOnlyMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.TEXT_ONLY;
  /**
   * The content for the publication as markdown.
   */
  content: EncryptableMarkdown;
};
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/text-only/1.0.0/schema.json",
  "name": "My text",
  "description": "My text Description",
  "external_url": "https://mytext.com",
  "attributes": [],
  "image": "https://text.com/image.png",
  "lens": {
    "title": "My text",
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "locale": "en-US",
    "mainContentFocus": "TEXT_ONLY",
    "content": "My text Content",
    "tags": ["text"],
    "appId": "my-app-id"
  }
}
```
