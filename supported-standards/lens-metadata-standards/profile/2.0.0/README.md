# Profile metadata standard

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/profile/2.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/profile/ProfileMetadataSchema.ts

```ts
type ProfileMetadata = {
  /**
   * The schema id.
   */
  $schema: ProfileSchemaId.LATEST;
  /**
   * The metadata details.
   */
  lens: ProfileMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type ProfileMetadataDetails = {
  /**
   * A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI. Use a UUID if unsure.
   */
  id: string;
  /**
   * The App Id that this Profile details are relevant for.
   *
   * If omitted the data is considered to be the global Profile data.
   */
  appId?: AppId;
  /**
   * The profile display name.
   */
  name?: string;
  /**
   * The profile bio as markdown.
   */
  bio?: Markdown;
  /**
   * The profile picture.
   */
  picture?: URI;
  /**
   * The profile cover picture.
   */
  coverPicture?: URI;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently supported by the standard.
   * Over time, common attributes will be added to the standard and their usage as arbitrary attributes will be discouraged.
   */
  attributes?: MetadataAttribute[];
};
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://json-schemas.lens.dev/profile/2.0.0.json",
  "lens": {
    "id": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    "name": "John Doe"
  }
}
```
