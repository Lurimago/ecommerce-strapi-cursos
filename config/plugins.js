module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {

            params: {
              Bucket: "ecommerce-strapi-cursos",
            },
        },
      },
    },
  });