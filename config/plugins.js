module.exports = () => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        film: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
