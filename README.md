# Serverless TypeScript GraphQL Example

Simple sample app using [Serverless Application Framework](https://www.serverless.com/), [TypeScript](https://www.typescriptlang.org/) and [Apollo GraphQL](https://www.apollographql.com/) on AWS.

Uses [DynamoDB](https://aws.amazon.com/dynamodb/) and a REST API based on [CrudCrud](https://crudcrud.com/) as data provider.

## Features

- Integrates [serverless webpack](https://github.com/serverless-heaven/serverless-webpack)
- Integrates [serverless offline](https://github.com/dherault/serverless-offline)
- Integrates [serverless layers](https://github.com/agutoli/serverless-layers)
- Adds [GraphQL Playground](https://github.com/prisma-labs/graphql-playground)
- Uses [Prettier](https://github.com/prettier/prettier)
- Uses [ESLint](https://github.com/eslint/eslint)
- Modularizes GraphQL schema
- Fetches data from DynamoDB and a REST API

## Prerequisites

- Setup your AWS credentials to work with Serverless [(Guide)](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)
- Get an endpoint identifier from [CrudCrud](https://crudcrud.com/) and set it in [serverless.yml](./serverless.yml)

## Deploy

- Run `npm install`
- Run `npm run deploy`

## Run locally (with remote DynamoDB)

- Deploy first (to setup remote DynamoDB)
- Run `npm run offline`
- Go to `http://localhost:3000/local/playground` and play around

## Seed data
 
Data samples in JSON can be found for [DynamoDB](./data/municipalties.json) and [CrudCrud](./data/mountain-passes.json) respectively.

## Example 

```graphql
query {
  mountainPasses {
    name
    elevation
    length
    maxGradient
    from {
      name
      postalCode
      population
      area
    }
    to {
      name
      postalCode
      population
      area
    }
  }
}
```
```json
{
  "data": {
    "mountainPasses": [
      {
        "name": "Furka",
        "elevation": 2429,
        "length": 28,
        "maxGradient": 0.11,
        "from": {
          "name": "Realp",
          "postalCode": 6491,
          "population": 153,
          "area": 77.97
        },
        "to": {
          "name": "Oberwald",
          "postalCode": 3999,
          "population": 277,
          "area": 96.9
        }
      },
      {
        "name": "St. Gotthard",
        "elevation": 2107,
        "length": 27,
        "maxGradient": 0.08,
        "from": {
          "name": "Göschenen",
          "postalCode": 6487,
          "population": 448,
          "area": 104.31
        },
        "to": {
          "name": "Airolo",
          "postalCode": 6780,
          "population": 1501,
          "area": 94.5
        }
      }
    ]
  }
}
