# Image 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/image/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/ImageSchema.ts

```ts
type ImageMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.IMAGE_LATEST;
  /**
   * The metadata details.
   */
  lens: ImageMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type ImageMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.IMAGE;
  /**
   * The image.
   */
  image: MediaImage;
  /**
   * A title for the image.
   */
  title?: string;
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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/image/1.0.0/schema.json",
  "name": "My Image",
  "description": "My Image Description",
  "external_url": "https://myimage.com",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "locale": "en-US",
    "mainContentFocus": "IMAGE",
    "title": "My Image Title",
    "content": "My Image Content",
    "tags": ["image"],
    "image": {
      "type": "PNG",
      "item": "https://myimage.com",
      "altTag": "My Image",
      "license": "CCO"
    },
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
