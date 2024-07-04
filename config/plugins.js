module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
            //  accessKeyId: "AKIAQ3EGV5QFQ5HGGXCO",
            // secretAccessKey: "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",
            region: "us-east-2",
            params: {
              Bucket: "ecommerce-strapi-cursos",
            },
        },
      },
    },
  });