# Article 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/article/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/ArticleSchema.ts

```ts
type ArticleMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.ARTICLE_LATEST;
  /**
   * The metadata details.
   */
  lens: ArticleMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type ArticleMetadataDetails = PublicationMetadataCommon & {
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.ARTICLE;
  /**
   * Markdown content.
   */
  content: EncryptableMarkdown;
  /**
   * The optional article title.
   */
  title?: string;
  /**
   * Any attachment you want to include with it.
   */
  attachments?: AnyMedia[];
};
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/article/1.0.0/schema.json",
  "name": "My Article",
  "description": "My Article Description",
  "external_url": "https://myarticle.com",
  "attributes": [],
  "image": "https://myarticle.com/image.png",
  "lens": {
    "id": "bb8d69b3-4fda-4b41-9c60-2c22652c0173",
    "title": "My Article",
    "locale": "en-US",
    "mainContentFocus": "ARTICLE",
    "content": "My Article Content",
    "tags": ["article"],
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
