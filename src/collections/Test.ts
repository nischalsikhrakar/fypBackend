import { CollectionConfig } from "payload/types";

const Test: CollectionConfig = {
  slug: "test",

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
  ],
};

export default Test;
