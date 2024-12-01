/**
 * @public
 */
export const env = {
  contentful: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    deliveryAccessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
    previewAccessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  },
} as const;
