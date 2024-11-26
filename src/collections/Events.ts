import { CollectionConfig } from "payload/types";

const Events: CollectionConfig = {
  slug: "events",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
  },
  upload: {
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "eventName",
      label: "Event Name",
      type: "text",
      required: true,
    },
    {
      name: "eventPublisher",
      label: "Publisher Name",
      type: "text",
      required: true,
    },
    {
      name: "date",
      label: "Date",
      type: "text",
      required: true,
    },
    {
      name: "eventTime",
      label: "Event Time",
      type: "text",
      required: true,
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      required: true,
    },
    {
      name: "fee",
      label: "Fee",
      type: "radio",
      options: [
        {
          label: "Yes",
          value: "yes",
        },
        {
          label: "No",
          value: "no",
        },
      ],
      defaultValue: "yes",
      required: true,
    },
    {
      name: "amount",
      label: "Amount",
      type: "text",
    },
    {
      name: "eventType",
      label: "Event Type",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      name: "attenddie",
      type: "array",
      fields: [
        {
          name: "appUser",
          type: "text",
        },
        {
          name: "userId",
          type: "text",
        },
      ],
    },
  ],
};

export default Events;
