import type { EntryFieldTypes } from "contentful";

export type BlogContentModel = {
  title: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.RichText;
};
