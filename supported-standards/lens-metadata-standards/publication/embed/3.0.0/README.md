# Embed 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/embed/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/EmbedSchema.ts

```ts
type EmbedMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.EMBED_LATEST;
  /**
   * The metadata details.
   */
  lens: EmbedMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type EmbedMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.EMBED;
  /**
   * The embed URL.
   */
  embed: EncryptableURI;
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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/embed/1.0.0/schema.json",
  "name": "My embed",
  "description": "My embed description",
  "external_url": "https://mylink.com",
  "attributes": [],
  "image": "https://mynftimage.com/image.png",
  "animation_url": "https://myembed.com/embed.html",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "embed": "https://embedlink.com",
    "content": "My embed content",
    "locale": "en-US",
    "mainContentFocus": "EMBED",
    "tags": ["embed"],
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
