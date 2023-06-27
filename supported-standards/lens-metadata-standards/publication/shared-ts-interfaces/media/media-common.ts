import { Url } from '../type-alias';

export interface MediaCommon {
  /**
   * The item is the url to the media
   */
  item: Url;

  /**
   * The alt tags for accessibility
   */
  altTag?: string;

  /**
   * Any attributes for the video
   */
  attributes?: {
    key: string;
    value: string;
  }[];
}