import { CollectionConfig } from "payload/types";

const Events: CollectionConfig = {
  slug: "events",

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
  ],
};

export default Events;
