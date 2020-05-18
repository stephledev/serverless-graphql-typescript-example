import DynamoDB, { DocumentClient } from 'aws-sdk/clients/dynamodb'

const ENDPOINT = process.env.DYNAMODB_ENDPOINT

const createClient = (options?: DocumentClient.DocumentClientOptions & DynamoDB.Types.ClientConfiguration) => {
  return new DocumentClient({
    ...options,
    endpoint: ENDPOINT,
  })
}

export default createClient
