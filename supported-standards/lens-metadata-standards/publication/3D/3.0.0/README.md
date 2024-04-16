# 3D 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/3d/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/3D.ts

```ts
/**
 * Use this to share a 3D piece of art.
 */
type ThreeDMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.THREE_D_LATEST;
  /**
   * The metadata details.
   */
  lens: ThreeDMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type ThreeDMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.THREE_D;
  /**
   * The 3D items for the publication.
   */
  assets: ThreeDAsset[];
  /**
   * Optional markdown content.
   */
  content?: EncryptableMarkdown;
  /**
   * The other attachments you want to include with it.
   */
  attachments?: AnyMedia[];
};

/**
 * The 3D format type.
 */
enum ThreeDFormat {
  GLTF = "gLTF/GLB",
  FBX = "FBX",
  VRM = "VRM",
  OBJ = "OBJ",
}

/**
 * A 3D asset.
 */
type ThreeDAsset = {
  /**
   * The URI of the 3D asset zip file.
   */
  uri: URI;
  /**
   * The URL of the recommended web based 3D player to use to view the 3D asset.
   */
  playerUrl: URI;
  /**
   * The 3D format of the asset.
   */
  format: ThreeDFormat;
  /**
   * Path in extracted zip. Relative. 3D start point, MUST be 3D file type.
   */
  zipPath?: string;
  /**
   * The license regulating the use of the 3D asset.
   */
  license?: MetadataLicenseType;
};
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/3D/1.0.0/schema.json",
  "name": "My 3D Publication",
  "description": "My 3D Description",
  "external_url": "https://3d.com",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "animation_url": "https://3d.com/3d.html",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "locale": "en-US",
    "mainContentFocus": "3D",
    "content": "My 3D Asset",
    "tags": ["3d"],
    "items": [
      {
        "zipUrl": "ipfs://ipfs/QmWVrjNXmggU9ARYexwVmfyPkR2Ldb92afJz7tETCsnUJJ",
        "path": "gltf/normal/Angelus.glb",
        "playerUrl": "https://collectz/c/0x01b2e3-0x5a",
        "license": "CCO"
      }
    ],
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
