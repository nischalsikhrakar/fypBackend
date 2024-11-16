import { CollectionConfig } from "payload/types";

const AppUser: CollectionConfig = {
  slug: "app-user",
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "text",
      required: true,
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
  ],
};

export default AppUser;
