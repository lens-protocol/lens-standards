# Audio 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/audio/3.0.0.json).

## TypeScript

References: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/AudioSchema.ts

```ts
type AudioMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.AUDIO_LATEST;
  /**
   * The metadata details.
   */
  lens: AudioMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type AudioMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.AUDIO;
  /**
   * The audio.
   */
  audio: MediaAudio;
  /**
   * The optional audio title.
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
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/audio/1.0.0/schema.json",
  "name": "My Audio",
  "description": "My Audio Description",
  "external_url": "https://myaudio.com",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "animation_url": "https://myaudio.com/audio.mp3",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "locale": "en-US",
    "mainContentFocus": "AUDIO",
    "title": "The audio title",
    "content": "My Audio Content",
    "tags": ["audio"],
    "audio": {
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
