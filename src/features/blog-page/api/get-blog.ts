import type {
  EntryCollection,
  EntrySkeletonType,
  FieldsType,
} from "contentful";

import { env } from "@/config/env";

type Posts<T extends FieldsType> = EntryCollection<
  EntrySkeletonType<T, "blog">,
  undefined
>;

/**
 * contentfulからblogのデータを取得する
 *
 * @public
 */
export async function getBlog<T extends FieldsType>(
  params: ConstructorParameters<typeof URLSearchParams>[0],
): Promise<Posts<T>> {
  const searchParams = new URLSearchParams(params);
  if (env.contentful.deliveryAccessToken) {
    searchParams.set("access_token", env.contentful.deliveryAccessToken);
  }
  searchParams.set("content_type", "blog");

  const url = new URL(
    `/spaces/${env.contentful.spaceId}/environments/master/entries?${searchParams}`,
    "https://cdn.contentful.com",
  );

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
