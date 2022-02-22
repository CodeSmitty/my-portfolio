export default {
  title: "Author",
  name: "author",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Headshot",
      name: "headshot",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Bio",
      name: "bio",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
