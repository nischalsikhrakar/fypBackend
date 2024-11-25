import { CollectionConfig } from "payload/types";

const AppUser: CollectionConfig = {
  slug: "app-user",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
    {
      name: "password",
      type: "text",
      required: true,
    },
    {
      name: "dob",
      type: "text",
      required: true,
    },
    {
      name: "address",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "events",
      type: "array",
      fields: [
        {
          name: "eventName",
          type: "text",
        },
      ],
    },
  ],
};

export default AppUser;
