# Event 1.0.0

## JSON schema

The JSON schema can be found [here](https://github.com/lens-protocol/metadata/blob/v1.0.5/jsonschemas/publications/event/3.0.0.json).

## TypeScript

Reference: https://github.com/lens-protocol/metadata/blob/v1.0.5/src/publication/EventSchema.ts

```ts
type EventMetadata = MarketplaceMetadata & {
  /**
   * The schema id.
   */
  $schema: PublicationSchemaId.EVENT_LATEST;
  /**
   * The metadata details.
   */
  lens: EventMetadataDetails;
  /**
   * A cryptographic signature of the `lens` data.
   */
  signature?: Signature;
};

type EventMetadataDetails = PublicationMetadataCommon & {
  /**
   * The title of the event.
   */
  title?: string;
  /**
   * The main focus of the publication.
   */
  mainContentFocus: PublicationMainFocus.EVENT;
  /*
   * The location of the event.
   */
  location: EncryptableURI | EncryptableString;
  /**
   * The geographic position of the event.
   */
  position?: EncryptableGeoURI;
  /**
   * The address of the event.
   */
  address?: PhysicalAddress;
  /**
   * The event start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
   */
  startsAt: EncryptableDateTime;
  /**
   * The event end time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
   */
  endsAt: EncryptableDateTime;
  /**
   * Captures extra criteria to recompute correctly future start and end times.
   *
   * @see https://www.w3.org/International/wiki/WorkingWithTimeZones#Working_with_Future_and_Recurring_Events
   */
  schedulingAdjustments?: SchedulingAdjustments;
  /**
   * The links you want to include with it.
   */
  links?: EncryptableURI[];
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
 * An object intended to help with future events scheduling adjustments.
 *
 * @see https://www.w3.org/International/wiki/WorkingWithTimeZones#Working_with_Future_and_Recurring_Events
 */
type SchedulingAdjustments = {
  /**
   * Indicates a reference timezone for the event start and end times.
   * If physical event, you could use the timezone of the event location. If virtual event, the timezone of the event organizer.
   */
  timezoneId: TimezoneId;
  /**
   * Indicates the reference timezone offset with respect to UTC timezone a the time of event creation.
   * The difference in minutes between the reference timezone time and UTC time (e.g. UTC+2 would be -120, UTC-5 would be 300, UTC would be 0).
   */
  timezoneOffset: number;
};
```

## JSON example

Will use all the fields but remember a lot are optional you can use the JSON schema to see this.

```json
{
  "$schema": "https://raw.githubusercontent.com/lens-protocol/LIPs/feat/metadata-standards/lens-metadata-standards/publication/event/1.0.0/schema.json",
  "name": "My event",
  "description": "My event",
  "attributes": [],
  "image": "https://myimage.com/image.png",
  "external_url": "https://myevent.com",
  "lens": {
    "id": "1030ee6e-51cb-4a09-a74a-abdccc6ef890",
    "content": "Come to my cool virtual event",
    "locale": "en-US",
    "mainContentFocus": "EVENT",
    "title": "My event",
    "location": "AAVE office",
    "startsAt": "2023-05-24T12:46:10.987Z",
    "endsAt": "2023-05-24T19:46:10.987Z",
    "links": ["https://mylink.com"],
    "tags": ["event"],
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
