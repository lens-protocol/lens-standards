# Live stream 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/livestream/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/LiveStreamSchema.ts

```ts
type LiveStreamMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.LIVESTREAM_LATEST;
  /**
   * The metadata details.
   */
  lens: LiveStreamMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type LiveStreamMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.LIVESTREAM;
  /**
   * The livestream title.
   */
  title?: string;
  /**
   * The stream start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
   */
  startsAt: EncryptableDateTime;
  /**
   * The optional stream end time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
   */
  endsAt?: EncryptableDateTime;
  /**
   * Some livestream platforms have the playback url as a separate url.
   * If not your case make sure `liveUrl` and `playbackUrl` are the same.
   */
  playbackUrl: EncryptableURI;
  /**
   * Some livestream platforms have the live url as a separate url.
   * If not your case make sure `liveUrl` and `playbackUrl` are the same.
   */
  liveUrl: EncryptableURI;
  /**
   * The data cannot be changed so you can put in an API endpoint to know if it is still live or not for clients to be able to check.
   */
  checkLiveAPI?: EncryptableURI;
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

## Field extra requirements

`checkLiveAPI` response should be:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "isLive": {
      "type": "boolean"
    }
  },
  "required": ["isLive"]
}
```

`playbackUrl` and `liveUrl` MUST have the `lensId` in the query string parameter example:

`https://decentralized-media-server.com/stream.m3u8?lensId=0x2c6b-0x10`

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/livestream/1.0.0/schema.json",
  "name": "My livestream",
  "description": "My livestream",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://livestream.com",
  "animation_url": "https://playbackurl.com/trailer.mp4",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "content": "Come to my livestream tonight",
    "locale": "en-US",
    "mainContentFocus": "LIVESTREAM",
    "title": "My livestream",
    "startsAt": "2023-05-24T12:46:10.987Z",
    "endsAt": "2023-05-24T19:46:10.987Z",
    "playbackUrl": "https://playbackurl.com/playback.m3u8?lensId=0x2c6b-0x10",
    "liveUrl": "https://liveurl.com/live.m3u8?lensId=0x2c6b-0x10",
    "checkLiveAPI": "https://api.com/is-live",
    "tags": ["livestream"],
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

## Implementation recommendations

- `animation_url` should be used if you wish to make it collectable we suggest using a small video of the livestream as a trailer so opensea and other marketplaces can view it. Anything over 100MB will not be loaded by opensea. This is not to be used on clients wanting to show the livestream, always use the `playbackUrl` and `liveUrl` for this. `animated_url` only exists for compatibility with more generic NFT applications.
- if `startTime` is passed and `isLiveNowApiCall` is returning false then we advise the clients to not show the livestream as live.
- do not call `isLiveNowApiCall` until `startTime` has passed.
- if `endTime` is passed and `isLiveNowApiCall` is returning true then we advise the clients to continue showing the livestream as live.
- if you wish to do a `go live` button you can just prefill the `startTime` as now to meet the spec.
