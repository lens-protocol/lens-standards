# Spaces 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/space/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/SpaceSchema.ts

```ts
type SpaceMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.SPACE_LATEST;
  /**
   * The metadata details.
   */
  lens: SpaceMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type SpaceMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.SPACE;
  /**
   * The space title.
   */
  title: string;
  /**
   * The space join link.
   */
  link: EncryptableURI;
  /**
   * The space start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
   */
  startsAt: EncryptableDateTime;
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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/spaces/1.0.0/schema.json",
  "name": "My Spaces",
  "description": "My Spaces Description",
  "external_url": "https://myspaces.com",
  "attributes": [],
  "image": "https://myspaces.com/image.png",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "locale": "en-US",
    "mainContentFocus": "SPACES",
    "content": "Come join the spaces tomorrow at 12pm EST",
    "startTime": 1632937200,
    "tags": ["spaces"],
    "attachments": [
      {
        "type": "MP3",
        "item": "https://myaudio.com",
        "altTag": "My Audio",
        "audioType": "MUSIC",
        "cover": "https://myimage.com",
        "duration": 100,
        "license": "CCO",
        "credits": "My Credits",
        "artist": "My Artist",
        "genre": "My Genre",
        "recordLabel": "My Record Label"
      }
    ],
    "appId": "my-app-id"
  }
}
```
