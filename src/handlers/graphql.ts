import { ApolloServer } from 'apollo-server-lambda'
import schema from '../rootSchema'

const server = new ApolloServer({
  schema,
})

// eslint-disable-next-line import/prefer-default-export
export const handler = server.createHandler()
