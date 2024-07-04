module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {

            region: "us-east-2",
            params: {
              Bucket: "ecommerce-strapi-cursos",
            },
        },
      },
    },
  });