import { CollectionConfig } from "payload/types";

const UserEvents: CollectionConfig = {
  slug: "user-events",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "userId",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "events",
      type: "array",
      fields: [
        {
          name: "eventName",
          type: "text",
        },
        {
          name: "eventId",
          type: "text",
        },
      ],
    },
  ],
};

export default UserEvents;
