# Story 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/story/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/StorySchema.ts

```ts
type StoryMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.STORY_LATEST;
  /**
   * The metadata details.
   */
  lens: StoryMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type StoryMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.STORY;
  /**
   * The story asset.
   */
  asset: AnyMedia;
  /**
   * Optional markdown content.
   */
  content?: EncryptableMarkdown;
};
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/story/1.0.0/schema.json",
  "name": "My Story",
  "description": "My Story Description",
  "external_url": "https://mystory.com",
  "attributes": [],
  "image": "https://mystory.com/story.png",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "locale": "en-US",
    "mainContentFocus": "STORY",
    "content": "Bored!!",
    "tags": ["story"],
    "asset": {
      "type": "PNG",
      "item": "https://myimage.com",
      "altTag": "My Image",
      "license": "CCO"
    },
    "appId": "my-app-id"
  }
}
```
