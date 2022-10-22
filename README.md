# Serverless Payment Frontend

### Template

This app was created using Chakra UI template:

```
npx create-react-app serverless-payment-frontend --template @chakra-ui
```

Chakra UI gives easy to use constructs to build UI fast without having to worry much about CSS.

### Run Locally

```
npm install
npm start
```

### Configure the API host

In the `.env` file, provide the `PAYMENT_HOST` value which would expose APIs for your Payment integration.

### Deploy to Cloud

```
npm run build
sls deploy
```

### Plugins

We will be using `Lift` from Serverless which will deploy the frontend in S3, setup bucket policies, configure Cloud front and manage cache invalidation.

https://www.serverless.com/plugins/lift
