import lambdaPlayground from 'graphql-playground-middleware-lambda'

// eslint-disable-next-line import/prefer-default-export
export const handler = lambdaPlayground({
  endpoint: 'graphql',
})
