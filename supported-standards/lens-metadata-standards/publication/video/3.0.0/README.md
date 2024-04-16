# Video 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/video/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/VideoSchema.ts

```ts
type VideoMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.VIDEO_LATEST;
  /**
   * The metadata details.
   */
  lens: VideoMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type VideoMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus:
    | PublicationMainFocus.VIDEO
    | PublicationMainFocus.SHORT_VIDEO;
  /**
   * The video.
   */
  video: MediaVideo;
  /**
   * The optional video title.
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

### Video

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/video/1.0.0/schema.json",
  "name": "My Video",
  "description": "My Video Description",
  "external_url": "https://myvideo.com",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "animation_url": "https://myvideo.com/video.mp4",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "locale": "en-US",
    "mainContentFocus": "VIDEO",
    "title": "My Video",
    "content": "My Video Content",
    "tags": ["video"],
    "video": {
      "type": "MP4",
      "item": "https://myvideo.com",
      "altTag": "My Video",
      "cover": "https://myimage.com",
      "duration": 100,
      "license": "CCO"
    },
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

## Short video

Must be under 2 minutes.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/video/1.0.0/schema.json",
  "name": "My Video",
  "description": "My Video Description",
  "external_url": "https://myvideo.com",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "animation_url": "https://myvideo.com/video.mp4",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "locale": "en-US",
    "mainContentFocus": "SHORT_VIDEO",
    "content": "My Short Video Content",
    "tags": ["video"],
    "video": {
      "type": "MP4",
      "item": "https://myvideo.com",
      "altTag": "My Video",
      "cover": "https://myimage.com",
      "duration": 100,
      "license": "CCO"
    },
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
