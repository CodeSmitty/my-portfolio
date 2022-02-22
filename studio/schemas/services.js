export default {
  title: "Service",
  name: "service",
  type: "document",
  fields: [
    {
      title: "tier",
      name: "tier",
      type: "string",
    },

    {
      title: "graphic",
      name: "graphic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "tier price",
      name: "priceRange",
      type: "number",
    },
    {
      title: "tier-description",
      name: "tierDescription",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "tier feature",
      name: "tierFeature",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
